import { useEffect, useState } from "react";
import { Link } from "react-router";

import { getCurrentUser, type AuthUser } from "../../../api/auth";
import { assets } from "../../../utils/data";
import EditIcon from "../../../icons/EditIcon";
import UserOutlineIcon from "../../../icons/UserOutlineIcon";
import MailOutlineIcon from "../../../icons/MailOutlineIcon";
import PhoneIcon from "../../../icons/PhoneIcon";
import ShieldIcon from "../../../icons/ShieldIcon";
import TempleIcon from "../../../icons/TempleIcon";
import Skeleton from "../../../reusables/Skeleton";
import Toast from "../../../reusables/Toast";
import { formatDate } from "../../../utils/formatDate";

function ProfileHeader() {
  return (
    <header className="flex items-end justify-between gap-6 max-[680px]:items-start max-[680px]:flex-col">
      <div>
        <h1 className="text-2xl font-bold leading-8 tracking-[0.07px] text-[#101828]">
          My Profile
        </h1>
        <p className="text-sm text-[var(--muted)]">
          View and manage your personal information.
        </p>
      </div>
      <Link
        to="/dashboard/profile/edit"
        className="flex items-center gap-2 rounded-lg bg-[var(--button)] px-6 py-2.5 text-sm font-bold text-[#101828] no-underline"
      >
        <EditIcon />
        Edit Profile
      </Link>
    </header>
  );
}

function ProfileIdentity({ user }: { user: AuthUser }) {
  const fullName = `${user.firstName} ${user.lastName}`.trim();
  return (
    <div className="flex w-[220px] shrink-0 flex-col items-center border-r border-[#f1f5f9] pr-8 max-[900px]:w-full max-[900px]:border-r-0 max-[900px]:border-b max-[900px]:pb-8 max-[900px]:pr-0">
      <div className="relative">
        <img
          className="size-[140px] rounded-full border-4 border-white object-cover shadow-[0_1px_2px_rgb(0_0_0_/_5%)]"
          src={assets.avatar}
          alt={fullName}
        />
        <span className="absolute bottom-2 right-2 size-5 rounded-full border-[3px] border-white bg-[#22c55e]" />
      </div>
      <h2
        className="mt-4 max-w-full truncate text-[22px] font-bold text-[#101828]"
        title={fullName}
      >
        {fullName}
      </h2>
      <span className="mt-1 rounded bg-[#e0f2fe] px-3 py-0.5 text-[11px] font-bold uppercase tracking-[0.05em] text-[#0369a1]">
        {user.role}
      </span>
      <dl className="mt-6 flex w-full flex-col gap-3 text-[13px]">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-[var(--muted)]">Staff ID</dt>
          <dd className="font-medium text-[#101828]">{user.staffId}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-[var(--muted)]">Joined</dt>
          <dd className="font-medium text-[#101828]">
            {formatDate(user.createdAt)}
          </dd>
        </div>
      </dl>
    </div>
  );
}

function ProfileInformation({ user }: { user: AuthUser }) {
  const profileDetails = [
    {
      label: "Full Name",
      value: `${user.firstName} ${user.lastName}`.trim(),
      icon: <UserOutlineIcon />,
    },
    { label: "Email Address", value: user.email, icon: <MailOutlineIcon /> },
    { label: "Phone Number", value: user.phone, icon: <PhoneIcon /> },
    { label: "Role", value: user.role, icon: <ShieldIcon /> },
  ];
  return (
    <dl className="flex-1 flex flex-col gap-12 content-start py-2">
      {profileDetails.map((detail) => (
        <div className="flex min-h-10 items-center gap-4" key={detail.label}>
          {detail.icon}
          <div>
            <dt className="text-xs text-[var(--muted)]">{detail.label}</dt>
            <dd className="text-[15px] font-medium text-[#101828]">
              {detail.value}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

function ProfileCard({ user }: { user: AuthUser }) {
  return (
    <section className="flex min-h-[470px] items-start gap-20 rounded-xl border border-[#e2e8f0] bg-[var(--surface)] p-16 max-[900px]:flex-col max-[900px]:gap-8 max-[680px]:p-6">
      <ProfileIdentity user={user} />
      <ProfileInformation user={user} />
    </section>
  );
}

function Profile() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;
    void getCurrentUser()
      .then((currentUser) => {
        if (isMounted) {
          setUser(currentUser);
          sessionStorage.setItem("tatum.user", JSON.stringify(currentUser));
        }
      })
      .catch((error: unknown) => {
        if (isMounted) {
          setErrorMessage(
            error instanceof Error
              ? error.message
              : "Unable to load your profile.",
          );
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="flex flex-col justify-between gap-8 min-h-[calc(100dvh_-_144px)]">
      {errorMessage && (
        <Toast message={errorMessage} onClose={() => setErrorMessage("")} />
      )}
      <div className="flex flex-col gap-6">
        <ProfileHeader />
        {user ? (
          <ProfileCard user={user} />
        ) : (
          <section className="flex min-h-[470px] items-center rounded-xl border border-[#e2e8f0] bg-[var(--surface)] p-16">
            <Skeleton className="h-24 w-full" />
          </section>
        )}
      </div>
      <footer className="flex items-center justify-between border-t border-[#e2e8f0] py-6 text-[11px] text-[#94a3b8] opacity-60 max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-4">
        <span>© 2024 Tatum Bank. All rights reserved.</span>
        <p className="flex gap-6">
          <span className="flex items-center gap-2">
            Licensed by CBN
            <span className="bg-[#D1D5DB] rounded-full size-6 inline-flex items-center justify-center">
              <TempleIcon />
            </span>
          </span>
          <span className="flex items-center gap-2">
            Licensed by CBN Insured by NDIC
            <span className="px-1.5 py-0.5 rounded-[2px] border border-[var(--placeholder)]">
              NDIC
            </span>
          </span>
        </p>
      </footer>
    </main>
  );
}

export default Profile;

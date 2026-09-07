import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import { getCurrentUser, type AuthUser } from "../../../api/auth";
import { updateProfile } from "../../../api/users";
import EditIcon from "../../../icons/EditIcon";
import UserOutlineIcon from "../../../icons/UserOutlineIcon";
import { assets } from "../../../utils/data";
import PhoneIcon from "../../../icons/PhoneIcon";
import MailOutlineIcon from "../../../icons/MailOutlineIcon";
import ShieldIcon from "../../../icons/ShieldIcon";
import TempleIcon from "../../../icons/TempleIcon";
import Skeleton from "../../../reusables/Skeleton";
import Toast from "../../../reusables/Toast";

const fieldClass =
  "h-12 w-full rounded-lg border border-[#e2e8f0] bg-[var(--surface)] px-4 text-sm text-[#101828] outline-none focus:border-[#94a3b8] focus:ring-2 focus:ring-[#e0f2fe]";
const labelClass = "flex items-center gap-2 text-xs text-[var(--muted)]";

function EditProfileHeader() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-base font-bold text-[#101828]">
          Edit Personal Information
        </h1>
        <p className="text-sm text-[var(--muted)]">
          Update your account details and profile picture.
        </p>
      </div>
      <div className="flex items-center justify-end gap-3">
        <button
          className="rounded-lg border border-[#e2e8f0] bg-[var(--surface)] px-6 py-2.5 text-sm font-bold text-[#101828]"
          type="button"
          onClick={() => navigate("/dashboard/profile")}
        >
          Cancel
        </button>
        <button
          className="rounded-lg bg-[var(--button)] px-6 py-2.5 text-sm font-bold text-[var(--button-text)]"
          type="submit"
          form="profile-form"
        >
          Save Changes
        </button>
      </div>
    </header>
  );
}

interface EditableFieldProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  icon: React.ReactNode;
  disabled?: boolean;
  type?: string;
}

function EditableField({
  label,
  value,
  onChange,
  icon,
  disabled = false,
  type = "text",
}: EditableFieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className={labelClass}>
        {icon}
        {label}
      </span>
      <input
        className={`${fieldClass} ${disabled ? "bg-[#f8fafc] text-[#aab5c1]" : ""}`}
        type={type}
        value={value}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </label>
  );
}

interface ProfilePhotoProps {
  preview: string | null;
  onUpload: (file: File) => void;
  onRemove: () => void;
}

function ProfilePhoto({ preview, onUpload, onRemove }: ProfilePhotoProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center gap-8 border-b border-[#e2e8f0] pb-8 max-[680px]:flex-col max-[680px]:items-start">
      <div className="relative">
        <img
          className="size-[120px] rounded-full border-4 border-white object-cover shadow-[0_1px_2px_rgb(0_0_0_/_5%)]"
          src={preview ?? assets.avatar}
          alt="Profile preview"
        />
        <button
          className="absolute bottom-1 right-1 flex size-8 items-center justify-center rounded-full border border-[#e2e8f0] bg-[var(--surface)] text-[#101828] shadow-[0_1px_1px_rgb(0_0_0_/_5%)]"
          type="button"
          aria-label="Choose profile photo"
          onClick={() => inputRef.current?.click()}
        >
          <EditIcon />
        </button>
        <input
          ref={inputRef}
          className="hidden"
          type="file"
          accept="image/png,image/jpeg"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) onUpload(file);
          }}
        />
      </div>
      <div>
        <h2 className="text-sm font-bold text-[#101828]">Profile Photo</h2>
        <p className="text-xs text-[var(--muted)]">
          PNG or JPG, at least 400x400px. Max size 5MB.
        </p>
        <div className="mt-4 flex gap-3">
          <button
            className="rounded-lg bg-[#e0f2fe] px-4 py-1.5 text-xs font-bold text-[#0369a1]"
            type="button"
            onClick={() => inputRef.current?.click()}
          >
            Upload New
          </button>
          <button
            className="rounded-lg border border-[#e2e8f0] bg-[var(--surface)] px-4 py-1.5 text-xs font-medium text-[var(--muted)] disabled:opacity-50"
            type="button"
            onClick={onRemove}
            disabled={!preview}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

function ProfileForm({ user }: { user: AuthUser }) {
  const [fullName, setFullName] = useState(
    `${user.firstName} ${user.lastName}`,
  );
  const [email] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [department, setDepartment] = useState(user.department);
  const [preview, setPreview] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const saveProfile: SubmitEventHandler = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts.shift() ?? "";
    const lastName = nameParts.join(" ");
    setIsSubmitting(true);

    try {
      await updateProfile({ firstName, lastName, phone, department });
      const updatedUser = { ...user, firstName, lastName, phone, department };
      sessionStorage.setItem("tatum.user", JSON.stringify(updatedUser));
      setSuccessMessage("Profile changes saved.");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to update your profile.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex flex-1 flex-col gap-8 rounded-xl border border-[#e2e8f0] bg-[var(--surface)] p-8 max-[680px]:p-6"
      id="profile-form"
      aria-busy={isSubmitting}
      onSubmit={saveProfile}
    >
      <ProfilePhoto
        preview={preview}
        onUpload={(file) => setPreview(URL.createObjectURL(file))}
        onRemove={() => setPreview(null)}
      />
      <div className="grid flex-1 grid-cols-[minmax(0,1fr)_291px] content-start gap-x-16 gap-y-8 max-[680px]:grid-cols-1">
        <EditableField
          label="Full Name"
          value={fullName}
          onChange={setFullName}
          icon={<UserOutlineIcon />}
        />
        <EditableField
          label="Email Address"
          value={email}
          icon={<MailOutlineIcon />}
          type="email"
        />
        <EditableField
          label="Phone Number"
          value={phone}
          onChange={setPhone}
          icon={<PhoneIcon />}
          type="tel"
        />
        <EditableField
          label="Department"
          value={department}
          onChange={setDepartment}
          icon={<ShieldIcon />}
        />
        <EditableField
          label="Role"
          value="Admin"
          icon={<ShieldIcon />}
          disabled
        />
      </div>
      {successMessage && (
        <Toast
          message={successMessage}
          variant="success"
          onClose={() => setSuccessMessage("")}
        />
      )}
      {errorMessage && (
        <Toast message={errorMessage} onClose={() => setErrorMessage("")} />
      )}
    </form>
  );
}

function EditProfile() {
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
    <main className="flex min-h-[calc(100dvh_-_144px)] flex-col justify-between gap-8">
      {errorMessage && (
        <Toast message={errorMessage} onClose={() => setErrorMessage("")} />
      )}
      <div className="flex flex-col gap-8">
        <EditProfileHeader />
        {user ? (
          <ProfileForm user={user} />
        ) : (
          <section className="rounded-xl border border-[#e2e8f0] bg-[var(--surface)] p-8">
            <Skeleton className="h-96 w-full" />
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

export default EditProfile;

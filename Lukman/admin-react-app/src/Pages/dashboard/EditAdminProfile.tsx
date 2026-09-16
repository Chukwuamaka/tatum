import { useRef, useState, type ChangeEvent } from "react";
import EditIcon from "../../icons/EditIcon";
import MailOutlineIcon from "../../icons/MailOutlineIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import ShieldIcon from "../../icons/ShieldIcon";
import UserOutlineIcon from "../../icons/UserOutlineIcon";
import profileImage from "../../assets/vibrant-Smile.png";
import cbnLogo from "../../assets/cbnlogo.png";
import ndicLogo from "../../assets/NDIC.png";

function EditAdminProfile() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profilePhoto, setProfilePhoto] = useState(profileImage);

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    setProfilePhoto(URL.createObjectURL(selectedFile));
  };

  const handleRemovePhoto = () => {
    setProfilePhoto("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section className="flex min-h-full flex-col gap-6 text-[#101828]">
      <header className="flex items-start justify-between gap-6 max-[680px]:flex-col">
        <div>
          <h1 className="text-sm font-bold leading-5">Edit Personal Information</h1>
          <p className="text-[10px] leading-4 text-[#71829d]">
            Update your account details and profile picture.
          </p>
        </div>
        <div className="flex items-center gap-2 max-[680px]:w-full">
          <button
            className="h-8 rounded-md border border-[#dbe3ee] bg-white px-5 text-[10px] font-bold text-[#101828] max-[680px]:flex-1"
            type="button"
          >
            Cancel
          </button>
          <button
            className="h-8 rounded-md bg-[#ffc629] px-5 text-[10px] font-bold text-[#101828] max-[680px]:flex-1"
            type="button"
          >
            Save Changes
          </button>
        </div>
      </header>

      <div className="min-h-[528px] rounded-lg border border-[#e2e8f0] bg-white px-6 py-7 max-[680px]:px-4 max-[680px]:py-6">
        <div className="flex items-center gap-7 max-[680px]:items-start max-[680px]:gap-4">
          <div className="relative h-[84px] w-[84px] shrink-0 rounded-full border-2 border-white shadow-[0_1px_4px_rgba(15,23,42,0.2)]">
            {profilePhoto ? (
              <img
                className="h-full w-full rounded-full object-cover"
                src={profilePhoto}
                alt="Admin profile"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#e2e8f0]">
                <UserOutlineIcon />
              </div>
            )}
            <button
              className="absolute -right-1 bottom-0 flex h-6 w-6 items-center justify-center rounded-full border border-[#dbe3ee] bg-white text-[#101828] shadow-sm"
              type="button"
              aria-label="Choose a new profile photo"
              onClick={() => fileInputRef.current?.click()}
            >
              <EditIcon width={13} height={13} />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <h2 className="text-[10px] font-bold leading-4">Profile Photo</h2>
              <p className="text-[9px] leading-3 text-[#71829d]">
                PNG or JPG, at least 400x400px. Max size 5MB.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="h-7 rounded-md bg-[#dff1ff] px-3 text-[9px] font-bold text-[#0875c1]"
                type="button"
                onClick={() => fileInputRef.current?.click()}
              >
                Upload New
              </button>
              <button
                className="h-7 rounded-md border border-[#dbe3ee] bg-white px-3 text-[9px] text-[#64748b]"
                type="button"
                onClick={handleRemovePhoto}
              >
                Remove
              </button>
            </div>
            <input
              ref={fileInputRef}
              className="hidden"
              type="file"
              accept="image/png,image/jpeg"
              onChange={handlePhotoChange}
            />
          </div>
        </div>

        <div className="my-7 border-t border-[#e2e8f0]" />

        <form className="grid max-w-[522px] grid-cols-2 gap-x-12 gap-y-6 max-[680px]:grid-cols-1 max-[680px]:gap-x-0">
          <label className="flex flex-col gap-1.5 text-[9px] text-[#71829d]" htmlFor="full-name">
            <span className="flex items-center gap-1.5"><UserOutlineIcon width={12} height={14} />Full Name</span>
            <input className="h-9 rounded-md border border-[#dbe3ee] px-3 text-[10px] text-[#101828] outline-none focus:border-[#1683f7]" id="full-name" type="text" defaultValue="John Doe" />
          </label>

          <label className="flex flex-col gap-1.5 text-[9px] text-[#71829d]" htmlFor="email-address">
            <span className="flex items-center gap-1.5"><MailOutlineIcon width={13} height={13} />Email Address</span>
            <input className="h-9 rounded-md border border-[#dbe3ee] px-3 text-[10px] text-[#101828] outline-none focus:border-[#1683f7]" id="email-address" type="email" defaultValue="john.doe@tatumbank.com" />
          </label>

          <label className="flex flex-col gap-1.5 text-[9px] text-[#71829d]" htmlFor="phone-number">
            <span className="flex items-center gap-1.5"><PhoneIcon width={13} height={13} />Phone Number</span>
            <input className="h-9 rounded-md border border-[#dbe3ee] px-3 text-[10px] text-[#101828] outline-none focus:border-[#1683f7]" id="phone-number" type="tel" defaultValue="+234 801 234 5678" />
          </label>

          <label className="flex flex-col gap-1.5 text-[9px] text-[#71829d]" htmlFor="role">
            <span className="flex items-center gap-1.5"><ShieldIcon width={13} height={13} />Role</span>
            <input className="h-9 rounded-md border border-[#dbe3ee] bg-[#f8fafc] px-3 text-[10px] text-[#a6b4c8] outline-none" id="role" type="text" value="Super Admin" disabled readOnly />
          </label>
        </form>
      </div>

      <footer className="flex items-center justify-between border-t border-[#e2e8f0] pt-8 text-[9px] text-[#a6b4c8] max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-4">
        <span>© 2024 Tatum Bank. All rights reserved.</span>
        <div className="flex items-center gap-4 max-[680px]:flex-wrap">
          <span className="flex items-center gap-1.5">Licensed by CBN <img className="h-5 w-5 object-contain" src={cbnLogo} alt="CBN" /></span>
          <span className="flex items-center gap-1.5">Insured by NDIC <img className="h-5 w-8 object-contain" src={ndicLogo} alt="NDIC" /></span>
        </div>
      </footer>
    </section>
  );
}

export default EditAdminProfile;
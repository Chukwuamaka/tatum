import DoubleChevronLeftIcon from "../../icons/DoubleChevronLeftIcon";
import DownloadIcon from "../../icons/DownloadIcon";
import InfoCircleIcon from "../../icons/InfoCircleIcon";
import SearchIcon from "../../icons/SearchIcon";
import Button from "./Button";

interface FormInputProps {
  inputName: string;
  type: "email" | "text" | "tel" | "select";
  placeholder: string;
}

const formInputs: FormInputProps[] = [
  { inputName: "Full Name", type: "text", placeholder: "Enter full name" },
  {
    inputName: "Phone Number",
    type: "tel",
    placeholder: "e.g +234 800 000 0000",
  },
];

const formInputs2: FormInputProps[] = [
  {
    inputName: "Email Address",
    type: "email",
    placeholder: "e.g name@tatumbank.com",
  },
  { inputName: "Department", type: "select", placeholder: "Select Department" },
];

function FormInput({ inputName, type, placeholder }: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {inputName}
      </label>
      {type === "select" ? (
        <select
          name={inputName}
          className="w-full appearance-none border border-gray-300 rounded-md px-3 py-4.5 text-sm text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">{placeholder}</option>
        </select>
      ) : (
        <input
          type={type}
          name={inputName}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      )}
    </div>
  );
}

function FormInputSection({ inputs }: { inputs: FormInputProps[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-5">
      {inputs.map((inp) => (
        <FormInput
          key={inp.inputName}
          inputName={inp.inputName}
          placeholder={inp.placeholder}
          type={inp.type}
        />
      ))}
    </div>
  );
}

function UserManagement() {
  return (
    <div className="max-w-[800px]">
      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="flex items-center gap-3 p-6">
          <DoubleChevronLeftIcon className="text-gray-500 w-4 h-4" />
          <p className="font-semibold text-gray-900">Invite New User</p>
        </div>

        <form action="">
          <div className="border-t border-[#E5E7EB] p-8 space-y-5">
            <FormInputSection inputs={formInputs} />
            <FormInputSection inputs={formInputs2} />

            <div className="flex items-start gap-2 bg-gray-50 rounded-md p-4">
              <DownloadIcon className="text-gray-400 w-4 h-4 mt-0.5 shrink-0" />
              <p className="text-sm text-gray-600">
                An invitation link will be sent to the user's email address.
                They will be required to set up their password and complete
                their profile within 48 hours.
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t border-[#E5E7EB] p-6">
            <Button
              type="button"
              text="Cancel"
              className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2.5 rounded-md text-sm font-medium"
            />
            <Button
              type="submit"
              text="Send Invitation"
              leftIcon={<SearchIcon />}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2.5 rounded-md text-sm font-medium cursor-pointer"
            />
          </div>
        </form>
      </div>

      <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-lg p-4">
        <InfoCircleIcon className="text-blue-500 w-5 h-5 mt-0.5 shrink-0" />
        <div>
          <p className="font-semibold text-blue-900 text-sm mb-1">
            Important Note
          </p>
          <p className="text-sm text-blue-700">
            Invited users will receive an email with instructions to set their
            password and complete their profile registration. Invitations expire
            after 48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;

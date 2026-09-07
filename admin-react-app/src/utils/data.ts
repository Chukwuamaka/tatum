const icon = (name: string) => `https://www.figma.com/api/mcp/asset/${name}`;

export const assets = {
  logo: icon("cb1fd938-5275-47a9-9715-9bbc55e1fc8f.svg"),
  avatar: icon("db15aa63-8a50-4d26-b93b-ddc643fef10d.png"),
  users: icon("1410fd59-3f3a-4b91-b89a-909078ff857e.svg"),
  filter: icon("3d32cc96-f8f4-4678-80b9-3c1d48fffe4a.svg"),
  avatars: [
    icon("9671dbb1-afb5-42e1-9591-e1f064f2551e.png"),
    icon("4fb1c07c-779e-4c5b-897d-f9902fc8935b.png"),
    icon("b36bb87b-dddc-424b-98ec-5e512f27d6e8.png"),
    icon("c946e126-3aad-47ff-ba12-82dcce5977ff.png"),
    icon("71f858dc-0061-41f0-a671-f2c06fcd8644.png"),
    icon("d972afb9-2a26-40bc-a51f-c582fd0f95e0.png"),
  ],
};

export enum KycStatus {
  UNVERIFIED = "unverified",
  PENDING = "pending",
  VERIFIED = "verified",
}

export interface CustomerRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  kycStatus: KycStatus;
  dateRegistered: string;
}

export const customers: CustomerRecord[] = [
  {
    id: "CUST - 0003142",
    name: "Chinelo Okoro",
    phone: "+234 802 123 4567",
    email: "chinelo.o@mail.com",
    kycStatus: KycStatus.VERIFIED,
    dateRegistered: "12 Jan 2024",
  },
  {
    id: "CUST - 0008921",
    name: "Babatunde Lawal",
    phone: "+234 810 987 6543",
    email: "b.lawal@mail.com",
    kycStatus: KycStatus.PENDING,
    dateRegistered: "05 Feb 2024",
  },
  {
    id: "CUST - 0001567",
    name: "Fatima Yusuf",
    phone: "+234 703 555 0192",
    email: "fatima.y@mail.com",
    kycStatus: KycStatus.VERIFIED,
    dateRegistered: "20 Mar 2024",
  },
  {
    id: "CUST - 0004432",
    name: "Emeka Obi",
    phone: "+234 905 444 3322",
    email: "emeka.obi@mail.com",
    kycStatus: KycStatus.UNVERIFIED,
    dateRegistered: "15 Apr 2024",
  },
  {
    id: "CUST - 0007781",
    name: "Zainab Ahmed",
    phone: "+234 814 222 1111",
    email: "z.ahmed@mail.com",
    kycStatus: KycStatus.VERIFIED,
    dateRegistered: "10 May 2024",
  },
  {
    id: "CUST - 0002290",
    name: "Olumide Bakare",
    phone: "+234 809 333 4444",
    email: "o.bakare@mail.com",
    kycStatus: KycStatus.PENDING,
    dateRegistered: "22 May 2024",
  },
];

export enum AirtimeNetworks {
  MTN = "mtn",
  AIRTEL = "airtel",
  GLO = "glo",
}

export enum TransactionStatus {
  SUCCESS = "success",
  PENDING = "pending",
  FAILED = "failed",
}

export interface TransactionRecord {
  id: string;
  phone: string;
  network: AirtimeNetworks;
  amount: string;
  status: TransactionStatus;
  customer: string;
}

export const transactions: TransactionRecord[] = [
  {
    id: "AT2405270012457",
    phone: "07088109974",
    network: AirtimeNetworks.MTN,
    amount: "25,000.00",
    status: TransactionStatus.FAILED,
    customer: "Grace Lee",
  },
  {
    id: "AT2405270012458",
    phone: "09013055377",
    network: AirtimeNetworks.GLO,
    amount: "10,000.00",
    status: TransactionStatus.FAILED,
    customer: "Amaka Okeke",
  },
  {
    id: "AT2405270012459",
    phone: "07091538631",
    network: AirtimeNetworks.GLO,
    amount: "25,000.00",
    status: TransactionStatus.PENDING,
    customer: "Michael Chen",
  },
  {
    id: "AT2405270012460",
    phone: "09016792939",
    network: AirtimeNetworks.GLO,
    amount: "500.00",
    status: TransactionStatus.FAILED,
    customer: "Sarah Williams",
  },
  {
    id: "AT2405270012461",
    phone: "08022567823",
    network: AirtimeNetworks.AIRTEL,
    amount: "500.00",
    status: TransactionStatus.PENDING,
    customer: "John Adebayo",
  },
];

export const transactionStatusClassNames = {
  [TransactionStatus.FAILED]: "bg-[#fef2f2] text-[#ef4444]",
  [TransactionStatus.PENDING]: "bg-[#fff7ed] text-[#f59e0b]",
  [TransactionStatus.SUCCESS]: "bg-[#e6f4ea] text-[#039855]",
};

export const networkClassNames = {
  [AirtimeNetworks.AIRTEL]: "border-[#fecaca] bg-[#fee2e2] text-[#dc2626]",
  [AirtimeNetworks.GLO]: "border-[#bbf7d0] bg-[#f0fdf4] text-[#15803d]",
  [AirtimeNetworks.MTN]: "border-[#fde047] bg-[#fef9c3] text-black",
};

export type UserStatus = "active" | "inactive" | "suspended";

export interface UserRecord {
  name: string;
  id: string;
  email: string;
  role: string;
  status: UserStatus;
  lastLogin: string;
  avatar: string;
}

export const users: UserRecord[] = [
  {
    name: "Adebayo Oluwaseun",
    id: "USER-0012",
    email: "adebayo.o@tatumbank.com",
    role: "Super Admin",
    status: "active",
    lastLogin: "24 May 2024, 09:15 AM",
    avatar: assets.avatars[0],
  },
  {
    name: "Chinelo Okoro",
    id: "USER-0045",
    email: "chinelo.o@tatumbank.com",
    role: "Admin",
    status: "inactive",
    lastLogin: "22 May 2024, 11:30 AM",
    avatar: assets.avatars[1],
  },
  {
    name: "Babatunde Lawal",
    id: "USER-0089",
    email: "b.lawal@tatumbank.com",
    role: "Support Staff",
    status: "suspended",
    lastLogin: "15 May 2024, 04:45 PM",
    avatar: assets.avatars[2],
  },
  {
    name: "Fatima Yusuf",
    id: "USER-0102",
    email: "fatima.y@tatumbank.com",
    role: "Admin",
    status: "active",
    lastLogin: "10 May 2024, 10:20 AM",
    avatar: assets.avatars[3],
  },
];

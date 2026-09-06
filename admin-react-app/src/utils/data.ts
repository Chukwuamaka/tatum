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

enum KycStatus {
  UNVERIFIED = "unverified",
  PENDING = "pending",
  VERIFIED = "verified",
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  kycStatus: KycStatus;
  dateRegistered: string;
}

export const customers: Customer[] = [
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

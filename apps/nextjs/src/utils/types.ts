export type AlpacaAccountStatus =
  | "INACTIVE"
  | "ONBOARDING"
  | "SUBMITTED"
  | "ACTION_REQUIRED"
  | "EDITED"
  | "APPROVAL_PENDING"
  | "APPROVED"
  | "REJECTED"
  | "ACTIVE"
  | "SUBMISSION_FAILED"
  | "DISABLED"
  | "ACCOUNT_CLOSED";

export type AlpacaCryptoAccountStatus = AlpacaAccountStatus;

export type AlpacaAccountType = "trading" | "custodial" | "donor_advised";

export type AlpacaTradingConfiguration = {
  dtbpCheck: "both" | "entry" | "exit";
  fractionalTrading: boolean;
  maxMarginMultiplier: number | string;
  noShorting: boolean;
  pdtCheck: string;
  suspendTrade: boolean;
  tradeConfirmEmail: string;
};

export type AlpacaContactInfo = {
  emailAddress: string;
  phoneNumber: string;
  streetAddress: string[];
  city: string;
  state: string;
  postalCode: string;
};

export type FundingSource =
  | "employment_income"
  | "investments"
  | "inheritance"
  | "business_income"
  | "savings"
  | "family";

export type AlpacaIdentity = {
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  taxIdType: string;
  countryOfCitizenship: string;
  countryOfBirth: string;
  countryOfTaxResidence: string;
  fundingSource: FundingSource[];
  visaType: string | null;
  visaExpirationDate: string | null;
  dateOfDepartureFromUSA: string | null;
  permanentResident: string | null;
};

export type AlpacaDisclosures = {
  isControlPerson: boolean;
  isAffiliatedExchangeOrFINRA: boolean;
  isPoliticallyExposed: boolean;
  immediateFamily: boolean;
  isDiscretionaryAccount: boolean;
};

export type AlpacaAgreement = {
  agreementType: string;
  signedAt: string;
  ipAddress: string;
  revision: string;
};

export type AlpacaDocument = {
  documentType: string;
  documentSubtype: string;
  id: string;
  createdAt: string;
  content: string;
};

// https://alpaca.markets/docs/api-references/broker-api/accounts/accounts/#crypto-status
export type AlpacaAccount = {
  id: string;
  accountNumber: string;
  status: AlpacaAccountStatus;
  crypto_status: AlpacaCryptoAccountStatus;
  currency: string;
  lastEquity: string;
  accountType: AlpacaAccountType;
  tradingConfiguration: AlpacaTradingConfiguration | null;
  createdAt: string;
  contact: AlpacaContactInfo;
  identity: AlpacaIdentity;
  disclosures: AlpacaDisclosures;
  agreement: AlpacaAgreement[];
  documents: AlpacaDocument[];
  trustedContact: {
    givenName: string;
    familyName: string;
    emailAddress: string;
  };
  enabledAssets: string[];
};

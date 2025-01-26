import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  ValidatePassword: any;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String'];
  user: User;
};

export type Cards = {
  __typename?: 'Cards';
  cardsAddress: Array<CardsAddress>;
  cardsEmails: Array<CardsEmails>;
  cardsPhones: Array<CardsPhones>;
  cardsSocial: Array<CardsSocial>;
  cardsWeb: Array<CardsWeb>;
  colorPrincipal?: Maybe<Scalars['String']>;
  colorSegundario?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageProfile?: Maybe<FileInfo>;
  isActive: Scalars['Boolean'];
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

export type CardsAddress = {
  __typename?: 'CardsAddress';
  card: Cards;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  websiteUrl: Scalars['String'];
};

export type CardsCreateInput = {
  card: CreateCardInput;
  cardAddress: Array<CreateCardAddressInput>;
  cardEmail: Array<CreateCardEmailInput>;
  cardPhone: Array<CreateCardPhoneInput>;
  cardSocial: Array<CreateCardSocialInput>;
  cardWeb: Array<CreateCardWebInput>;
  imageProfileId: Scalars['String'];
};

export type CardsEmails = {
  __typename?: 'CardsEmails';
  card: Cards;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  icono?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type CardsPhones = {
  __typename?: 'CardsPhones';
  card: Cards;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  icono?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phone: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type CardsSocial = {
  __typename?: 'CardsSocial';
  card: Cards;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  icono?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  typeSocial: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type CardsWeb = {
  __typename?: 'CardsWeb';
  card: Cards;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  icono?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  web: Scalars['String'];
};

export type City = {
  __typename?: 'City';
  code: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  department?: Maybe<Department>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CodeConfirmationInput = {
  code: Scalars['String'];
  email: Scalars['String'];
};

export type CodeRecoverPasswordInput = {
  code: Scalars['String'];
  email: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateCardAddressInput = {
  cardId?: InputMaybe<Scalars['ID']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type CreateCardEmailInput = {
  cardId?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  icono?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateCardInput = {
  colorPrincipal?: InputMaybe<Scalars['String']>;
  colorSegundario?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  imageProfileId?: InputMaybe<Scalars['ID']>;
  isActive: Scalars['Boolean'];
  subTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type CreateCardPhoneInput = {
  cardId?: InputMaybe<Scalars['ID']>;
  icono?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type CreateCardSocialInput = {
  cardId?: InputMaybe<Scalars['ID']>;
  icono?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  typeSocial: Scalars['String'];
  url: Scalars['String'];
};

export type CreateCardWebInput = {
  cardId?: InputMaybe<Scalars['ID']>;
  icono?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  web: Scalars['String'];
};

export type CreateCarruselInput = {
  descripcion: Scalars['String'];
  fileId: Scalars['String'];
  link?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateDummyInput = {
  email?: InputMaybe<Scalars['String']>;
  firstField: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  secondField: Scalars['DateTime'];
  thirdField: Scalars['Float'];
};

export type CreateParametersInput = {
  codigo: Scalars['String'];
  companyId: Scalars['ID'];
  descripcion: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  type: TypeParameterEnum;
  valueDate?: InputMaybe<Scalars['DateTime']>;
  valueFileId?: InputMaybe<Scalars['ID']>;
  valueInt?: InputMaybe<Scalars['Float']>;
  valueString?: InputMaybe<Scalars['String']>;
};

export type CreatePlanInput = {
  companyId: Scalars['ID'];
  description: Scalars['String'];
  expirationDate: Scalars['DateTime'];
  fileId: Scalars['ID'];
  isActive: Scalars['Boolean'];
  title: Scalars['String'];
};

export type CreateUserInput = {
  address: Scalars['String'];
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fileId?: InputMaybe<Scalars['ID']>;
  identificationNumber: Scalars['String'];
  identificationType: UserDocumentTypes;
  lastName: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['ValidatePassword'];
  phoneNumber: Scalars['String'];
  tokenExpoNotification?: InputMaybe<Scalars['String']>;
  type: UserTypes;
};

export type DateFilter = {
  _between?: InputMaybe<Array<Scalars['DateTime']>>;
  _eq?: InputMaybe<Scalars['DateTime']>;
  _gt?: InputMaybe<Scalars['DateTime']>;
  _gte?: InputMaybe<Scalars['DateTime']>;
  _in?: InputMaybe<Array<Scalars['DateTime']>>;
  _lt?: InputMaybe<Scalars['DateTime']>;
  _lte?: InputMaybe<Scalars['DateTime']>;
  _neq?: InputMaybe<Scalars['DateTime']>;
  _notbetween?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Department = {
  __typename?: 'Department';
  code: Scalars['Int'];
  country?: Maybe<Country>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type DoubleVerificationInput = {
  code?: InputMaybe<Scalars['String']>;
  emailVerification?: InputMaybe<Scalars['Boolean']>;
  phoneVerification?: InputMaybe<Scalars['Boolean']>;
};

export type Dummy = {
  __typename?: 'Dummy';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstField: Scalars['String'];
  group?: Maybe<DummyGroup>;
  id: Scalars['ID'];
  items: Array<DummyItem>;
  phone: Scalars['String'];
  secondField: Scalars['DateTime'];
  thirdField: Scalars['Float'];
  type?: Maybe<DummyType>;
  updatedAt: Scalars['DateTime'];
};

export type DummyFamily = {
  __typename?: 'DummyFamily';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type DummyGroup = {
  __typename?: 'DummyGroup';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  family?: Maybe<DummyFamily>;
  id: Scalars['ID'];
  name: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type DummyItem = {
  __typename?: 'DummyItem';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  dummy: Dummy;
  firstField: Scalars['String'];
  fourthField: Scalars['Int'];
  id: Scalars['ID'];
  secondField: Scalars['DateTime'];
  thirdField: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type DummyType = {
  __typename?: 'DummyType';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FileInfo = {
  __typename?: 'FileInfo';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  fileExtension: Scalars['String'];
  fileMode: FileModes;
  fileMongoId?: Maybe<Scalars['String']>;
  fileName: Scalars['String'];
  fileUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  transformedFileUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export enum FileModes {
  Buffer = 'buffer',
  Mongo = 'mongo',
  Url = 'url'
}

export type FindCardAddressOrderBy = {
  createdAt?: InputMaybe<OrderTypes>;
};

export type FindCardAddressWhere = {
  _and?: InputMaybe<Array<FindCardAddressWhere>>;
  _or?: InputMaybe<Array<FindCardAddressWhere>>;
  card?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  streetAddress?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FindCardEmailOrderBy = {
  createdAt?: InputMaybe<OrderTypes>;
};

export type FindCardEmailWhere = {
  _and?: InputMaybe<Array<FindCardEmailWhere>>;
  _or?: InputMaybe<Array<FindCardEmailWhere>>;
  card?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FindCardOrderBy = {
  createdAt?: InputMaybe<OrderTypes>;
};

export type FindCardPhoneOrderBy = {
  createdAt?: InputMaybe<OrderTypes>;
};

export type FindCardPhoneWhere = {
  _and?: InputMaybe<Array<FindCardPhoneWhere>>;
  _or?: InputMaybe<Array<FindCardPhoneWhere>>;
  card?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  phone?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FindCardSocialOrderBy = {
  createdAt?: InputMaybe<OrderTypes>;
};

export type FindCardSocialWhere = {
  _and?: InputMaybe<Array<FindCardSocialWhere>>;
  _or?: InputMaybe<Array<FindCardSocialWhere>>;
  card?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  title?: InputMaybe<StringFilter>;
  typeSocial?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type FindCardWebOrderBy = {
  createdAt?: InputMaybe<OrderTypes>;
};

export type FindCardWebWhere = {
  _and?: InputMaybe<Array<FindCardWebWhere>>;
  _or?: InputMaybe<Array<FindCardWebWhere>>;
  card?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  title?: InputMaybe<StringFilter>;
  web?: InputMaybe<StringFilter>;
};

export type FindCardWhere = {
  _and?: InputMaybe<Array<FindCardWhere>>;
  _or?: InputMaybe<Array<FindCardWhere>>;
  createdAt?: InputMaybe<DateFilter>;
  descripcion?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<NumberFilter>;
  title?: InputMaybe<StringFilter>;
  user?: InputMaybe<StringFilter>;
};

export type FindCarruselOrderBy = {
  createdAt?: InputMaybe<OrderTypes>;
};

export type FindCarruselWhere = {
  _and?: InputMaybe<Array<FindCarruselWhere>>;
  _or?: InputMaybe<Array<FindCarruselWhere>>;
  descripcion?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FindDummyFamilyWhere = {
  _and?: InputMaybe<Array<FindDummyFamilyWhere>>;
  _or?: InputMaybe<Array<FindDummyFamilyWhere>>;
  description?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FindDummyGroupWhere = {
  _and?: InputMaybe<Array<FindDummyGroupWhere>>;
  _or?: InputMaybe<Array<FindDummyGroupWhere>>;
  family?: InputMaybe<FindDummyFamilyWhere>;
  name?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FindDummyOrderBy = {
  firstField?: InputMaybe<OrderTypes>;
  secondField?: InputMaybe<OrderTypes>;
  thirdField?: InputMaybe<OrderTypes>;
};

export type FindDummyTypeWhere = {
  _and?: InputMaybe<Array<FindDummyTypeWhere>>;
  _or?: InputMaybe<Array<FindDummyTypeWhere>>;
  name?: InputMaybe<StringFilter>;
};

export type FindDummyWhere = {
  _and?: InputMaybe<Array<FindDummyWhere>>;
  _or?: InputMaybe<Array<FindDummyWhere>>;
  firstField?: InputMaybe<StringFilter>;
  group?: InputMaybe<FindDummyGroupWhere>;
  secondField?: InputMaybe<DateFilter>;
  thirdField?: InputMaybe<NumberFilter>;
  type?: InputMaybe<FindDummyTypeWhere>;
};

export type FindParameterOrderBy = {
  createdAt?: InputMaybe<OrderTypes>;
};

export type FindParameterWhere = {
  _and?: InputMaybe<Array<FindParameterWhere>>;
  _or?: InputMaybe<Array<FindParameterWhere>>;
  company?: InputMaybe<DateFilter>;
  descripcion?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type FindPlanOrderBy = {
  createdAt?: InputMaybe<OrderTypes>;
};

export type FindPlanWhere = {
  _and?: InputMaybe<Array<FindPlanWhere>>;
  _or?: InputMaybe<Array<FindPlanWhere>>;
  company?: InputMaybe<StringFilter>;
  descripcion?: InputMaybe<StringFilter>;
  expirationDate?: InputMaybe<DateFilter>;
  isActive?: InputMaybe<NumberFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FindUsersOrderBy = {
  createdAt?: InputMaybe<OrderTypes>;
  email?: InputMaybe<OrderTypes>;
  name?: InputMaybe<OrderTypes>;
};

export type FindUsersWhere = {
  _and?: InputMaybe<Array<FindUsersWhere>>;
  _or?: InputMaybe<Array<FindUsersWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<Array<UserTypes>>;
};

export type HoursCompanyModel = {
  __typename?: 'HoursCompanyModel';
  hoursClose: Scalars['Float'];
  hoursOpen: Scalars['Float'];
};

export type MetadataPagination = {
  __typename?: 'MetadataPagination';
  currentPage?: Maybe<Scalars['Int']>;
  itemsPerPage?: Maybe<Scalars['Int']>;
  totalItems?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  codeConfirmation: User;
  createCardAddres: CardsAddress;
  createCardFull: Cards;
  createCardPhone: CardsPhones;
  createCardSocial: CardsSocial;
  createCardWeb: CardsWeb;
  createCards: Cards;
  createCardsEmail: CardsEmails;
  createCarrusel: WebCarrusel;
  createDummiesX: Array<Dummy>;
  createDummy: Dummy;
  createParameter: Parameter;
  createPlans: WebPlans;
  createUser: User;
  enableAndDisableDoubleVerification: Scalars['String'];
  i18nTest: Scalars['String'];
  recoverPassword: Scalars['String'];
  removeCardAddres: CardsAddress;
  removeCardPhone: CardsPhones;
  removeCardSocial: CardsSocial;
  removeCardWeb: CardsWeb;
  removeCards: Cards;
  removeCardsEmail: CardsEmails;
  removeCarrusel: WebCarrusel;
  removeDummy: Dummy;
  removeParameter: Parameter;
  removePlans: WebPlans;
  removeUser: User;
  resetPassword: User;
  resetSuperAdmin: User;
  signin: AuthResponse;
  updateCardAddres: CardsAddress;
  updateCardPhone: CardsPhones;
  updateCardSocial: CardsSocial;
  updateCardWeb: CardsWeb;
  updateCards: Cards;
  updateCardsEmail: CardsEmails;
  updateCarrusel: WebCarrusel;
  updateDummy: Dummy;
  updateParameter: Parameter;
  updatePassword: User;
  updatePlans: WebPlans;
  updateUser: User;
  updateUserPassword: User;
};


export type MutationCodeConfirmationArgs = {
  createInput: CodeConfirmationInput;
};


export type MutationCreateCardAddresArgs = {
  createInput: CreateCardAddressInput;
};


export type MutationCreateCardFullArgs = {
  input: CardsCreateInput;
};


export type MutationCreateCardPhoneArgs = {
  createInput: CreateCardPhoneInput;
};


export type MutationCreateCardSocialArgs = {
  createInput: CreateCardSocialInput;
};


export type MutationCreateCardWebArgs = {
  createInput: CreateCardWebInput;
};


export type MutationCreateCardsArgs = {
  createInput: CreateCardInput;
};


export type MutationCreateCardsEmailArgs = {
  createInput: CreateCardEmailInput;
};


export type MutationCreateCarruselArgs = {
  createInput: CreateCarruselInput;
};


export type MutationCreateDummyArgs = {
  createInput: CreateDummyInput;
};


export type MutationCreateParameterArgs = {
  createInput: CreateParametersInput;
};


export type MutationCreatePlansArgs = {
  createInput: CreatePlanInput;
};


export type MutationCreateUserArgs = {
  createInput: CreateUserInput;
};


export type MutationEnableAndDisableDoubleVerificationArgs = {
  doubleVerificationInput: DoubleVerificationInput;
};


export type MutationRecoverPasswordArgs = {
  recoverPasswordInput: RecoverPasswordInput;
};


export type MutationRemoveCardAddresArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveCardPhoneArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveCardSocialArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveCardWebArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveCardsArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveCardsEmailArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveCarruselArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveDummyArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveParameterArgs = {
  id: Scalars['ID'];
};


export type MutationRemovePlansArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
};


export type MutationSigninArgs = {
  signinInput: SigninInput;
};


export type MutationUpdateCardAddresArgs = {
  updateInput: UpdateCardAddressInput;
};


export type MutationUpdateCardPhoneArgs = {
  updateInput: UpdateCardPhoneInput;
};


export type MutationUpdateCardSocialArgs = {
  updateInput: UpdateCardSocialInput;
};


export type MutationUpdateCardWebArgs = {
  updateInput: UpdateCardWebInput;
};


export type MutationUpdateCardsArgs = {
  updateInput: UpdateCardInput;
};


export type MutationUpdateCardsEmailArgs = {
  updateInput: UpdateCardEmailInput;
};


export type MutationUpdateCarruselArgs = {
  updateInput: UpdateCarruselInput;
};


export type MutationUpdateDummyArgs = {
  updateInput: UpdateDummyInput;
};


export type MutationUpdateParameterArgs = {
  updateInput: UpdateParametersInput;
};


export type MutationUpdatePasswordArgs = {
  updatePasswordInput: UpdatePasswordInput;
};


export type MutationUpdatePlansArgs = {
  updateInput: UpdatePlanInput;
};


export type MutationUpdateUserArgs = {
  updateInput: UpdateUserInput;
};


export type MutationUpdateUserPasswordArgs = {
  updateUserPasswordInput: UpdateUserPasswordInput;
};

export type NumberFilter = {
  _between?: InputMaybe<Array<Scalars['Float']>>;
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<Scalars['Float']>>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _notbetween?: InputMaybe<Array<Scalars['Float']>>;
};

export enum OrderTypes {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Pagination = {
  skip: Scalars['Int'];
  take: Scalars['Int'];
};

export type Parameter = {
  __typename?: 'Parameter';
  codigo: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  descripcion: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  type: TypeParameterEnum;
  updatedAt: Scalars['DateTime'];
  valueDate?: Maybe<Scalars['DateTime']>;
  valueFile?: Maybe<FileInfo>;
  valueInt?: Maybe<Scalars['Float']>;
  valueString?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  Card: Cards;
  CardAddres: CardsAddress;
  CardAddreses: Array<CardsAddress>;
  CardAddresesCount: MetadataPagination;
  CardEmail: CardsEmails;
  CardPhone: CardsPhones;
  CardPhones: Array<CardsPhones>;
  CardPhonesCount: MetadataPagination;
  CardSocial: CardsSocial;
  CardSocials: Array<CardsSocial>;
  CardSocialsCount: MetadataPagination;
  CardWeb: CardsWeb;
  CardWebs: Array<CardsWeb>;
  CardWebsCount: MetadataPagination;
  Cards: Array<Cards>;
  CardsCount: MetadataPagination;
  CardsEmail: Array<CardsEmails>;
  CardsEmailCount: MetadataPagination;
  Carrusel: WebCarrusel;
  Carrusels: Array<WebCarrusel>;
  CarruselsCount: MetadataPagination;
  Plan: WebPlans;
  Plans: Array<WebPlans>;
  PlansCount: MetadataPagination;
  cities: Array<City>;
  city: City;
  codeRecoverPassword: Scalars['String'];
  countries: Array<Country>;
  country: Country;
  department: Department;
  departments: Array<Department>;
  dummies: Array<Dummy>;
  dummiesCount: MetadataPagination;
  dummy: Dummy;
  file: FileInfo;
  getHoursCompany: HoursCompanyModel;
  parameter: Parameter;
  parameters: Array<Parameter>;
  parametersCount: MetadataPagination;
  revalidate: AuthResponse;
  sendEmailRecovryPassword: Scalars['String'];
  user: User;
  users: Array<User>;
  usersCount: MetadataPagination;
  validateUserToken: User;
};


export type QueryCardArgs = {
  id: Scalars['ID'];
};


export type QueryCardAddresArgs = {
  id: Scalars['ID'];
};


export type QueryCardAddresesArgs = {
  orderBy?: InputMaybe<Array<FindCardAddressOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindCardAddressWhere>;
};


export type QueryCardAddresesCountArgs = {
  orderBy?: InputMaybe<Array<FindCardAddressOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindCardAddressWhere>;
};


export type QueryCardEmailArgs = {
  id: Scalars['ID'];
};


export type QueryCardPhoneArgs = {
  id: Scalars['ID'];
};


export type QueryCardPhonesArgs = {
  orderBy?: InputMaybe<Array<FindCardPhoneOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindCardPhoneWhere>;
};


export type QueryCardPhonesCountArgs = {
  orderBy?: InputMaybe<Array<FindCardPhoneOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindCardPhoneWhere>;
};


export type QueryCardSocialArgs = {
  id: Scalars['ID'];
};


export type QueryCardSocialsArgs = {
  orderBy?: InputMaybe<Array<FindCardSocialOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindCardSocialWhere>;
};


export type QueryCardSocialsCountArgs = {
  orderBy?: InputMaybe<Array<FindCardSocialOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindCardSocialWhere>;
};


export type QueryCardWebArgs = {
  id: Scalars['ID'];
};


export type QueryCardWebsArgs = {
  orderBy?: InputMaybe<Array<FindCardWebOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindCardWebWhere>;
};


export type QueryCardWebsCountArgs = {
  orderBy?: InputMaybe<Array<FindCardWebOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindCardWebWhere>;
};


export type QueryCardsArgs = {
  orderBy?: InputMaybe<Array<FindCardOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindCardWhere>;
};


export type QueryCardsCountArgs = {
  orderBy?: InputMaybe<Array<FindCardOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindCardWhere>;
};


export type QueryCardsEmailArgs = {
  orderBy?: InputMaybe<Array<FindCardEmailOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindCardEmailWhere>;
};


export type QueryCardsEmailCountArgs = {
  orderBy?: InputMaybe<Array<FindCardEmailOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindCardEmailWhere>;
};


export type QueryCarruselArgs = {
  id: Scalars['ID'];
};


export type QueryCarruselsArgs = {
  orderBy?: InputMaybe<Array<FindCarruselOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindCarruselWhere>;
};


export type QueryCarruselsCountArgs = {
  orderBy?: InputMaybe<Array<FindCarruselOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindCarruselWhere>;
};


export type QueryPlanArgs = {
  id: Scalars['ID'];
};


export type QueryPlansArgs = {
  orderBy?: InputMaybe<Array<FindPlanOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindPlanWhere>;
};


export type QueryPlansCountArgs = {
  orderBy?: InputMaybe<Array<FindPlanOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindPlanWhere>;
};


export type QueryCitiesArgs = {
  departmentId?: InputMaybe<Scalars['ID']>;
  orderBy?: InputMaybe<OrderTypes>;
};


export type QueryCityArgs = {
  departmentId: Scalars['ID'];
  id: Scalars['ID'];
};


export type QueryCodeRecoverPasswordArgs = {
  codeRecoverPasswordInput: CodeRecoverPasswordInput;
};


export type QueryCountriesArgs = {
  orderBy?: InputMaybe<OrderTypes>;
};


export type QueryCountryArgs = {
  id: Scalars['ID'];
};


export type QueryDepartmentArgs = {
  countryId: Scalars['ID'];
  id: Scalars['ID'];
};


export type QueryDepartmentsArgs = {
  countryId?: InputMaybe<Scalars['ID']>;
  orderBy?: InputMaybe<OrderTypes>;
};


export type QueryDummiesArgs = {
  orderBy?: InputMaybe<Array<FindDummyOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindDummyWhere>;
};


export type QueryDummiesCountArgs = {
  orderBy?: InputMaybe<Array<FindDummyOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindDummyWhere>;
};


export type QueryDummyArgs = {
  id: Scalars['ID'];
};


export type QueryFileArgs = {
  id: Scalars['ID'];
};


export type QueryGetHoursCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryParameterArgs = {
  id: Scalars['ID'];
};


export type QueryParametersArgs = {
  orderBy?: InputMaybe<Array<FindParameterOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindParameterWhere>;
};


export type QueryParametersCountArgs = {
  orderBy?: InputMaybe<Array<FindParameterOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindParameterWhere>;
};


export type QuerySendEmailRecovryPasswordArgs = {
  email: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  orderBy?: InputMaybe<Array<FindUsersOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindUsersWhere>;
};


export type QueryUsersCountArgs = {
  orderBy?: InputMaybe<Array<FindUsersOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindUsersWhere>;
};


export type QueryValidateUserTokenArgs = {
  validateTokenInput: ValidateTokenInput;
};

export type RecoverPasswordInput = {
  email: Scalars['String'];
};

export type SigninInput = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type StringFilter = {
  _contains?: InputMaybe<Scalars['String']>;
  _endswith?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  _like?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _notcontains?: InputMaybe<Scalars['String']>;
  _notendswith?: InputMaybe<Scalars['String']>;
  _notlike?: InputMaybe<Scalars['String']>;
  _notstartswith?: InputMaybe<Scalars['String']>;
  _startswith?: InputMaybe<Scalars['String']>;
};

export enum TypeParameterEnum {
  Date = 'date',
  File = 'file',
  Hours = 'hours',
  Number = 'number',
  String = 'string'
}

export type UpdateCardAddressInput = {
  cardId?: InputMaybe<Scalars['ID']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  postalCode?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type UpdateCardEmailInput = {
  cardId?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  icono?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateCardInput = {
  colorPrincipal?: InputMaybe<Scalars['String']>;
  colorSegundario?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  imageProfileId?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  subTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type UpdateCardPhoneInput = {
  cardId?: InputMaybe<Scalars['ID']>;
  icono?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateCardSocialInput = {
  cardId?: InputMaybe<Scalars['ID']>;
  icono?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  typeSocial?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type UpdateCardWebInput = {
  cardId?: InputMaybe<Scalars['ID']>;
  icono?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  web?: InputMaybe<Scalars['String']>;
};

export type UpdateCarruselInput = {
  descripcion?: InputMaybe<Scalars['String']>;
  fileId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  link?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateDummyInput = {
  email?: InputMaybe<Scalars['String']>;
  firstField?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  phone?: InputMaybe<Scalars['String']>;
  secondField?: InputMaybe<Scalars['DateTime']>;
  thirdField?: InputMaybe<Scalars['Float']>;
};

export type UpdateParametersInput = {
  codigo?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['ID']>;
  descripcion?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TypeParameterEnum>;
  valueDate?: InputMaybe<Scalars['DateTime']>;
  valueFileId?: InputMaybe<Scalars['ID']>;
  valueInt?: InputMaybe<Scalars['Float']>;
  valueString?: InputMaybe<Scalars['String']>;
};

export type UpdatePasswordInput = {
  password: Scalars['ValidatePassword'];
  passwordConfirm: Scalars['ValidatePassword'];
  token: Scalars['String'];
};

export type UpdatePlanInput = {
  companyId?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  expirationDate?: InputMaybe<Scalars['DateTime']>;
  fileId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  fileId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  identificationNumber?: InputMaybe<Scalars['String']>;
  identificationType?: InputMaybe<UserDocumentTypes>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['ValidatePassword']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  tokenExpoNotification?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<UserTypes>;
};

export type UpdateUserPasswordInput = {
  currentPassword: Scalars['ValidatePassword'];
  newPassword: Scalars['ValidatePassword'];
  newPasswordConfirm: Scalars['ValidatePassword'];
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']>;
  confirmationCode?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerification: Scalars['Boolean'];
  file?: Maybe<FileInfo>;
  fullName: Scalars['String'];
  id: Scalars['ID'];
  identificationNumber?: Maybe<Scalars['String']>;
  identificationType?: Maybe<UserDocumentTypes>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneVerification: Scalars['Boolean'];
  status: UserStatusTypes;
  tokenExpoNotification?: Maybe<Scalars['String']>;
  type: UserTypes;
  updatedAt: Scalars['DateTime'];
};

export enum UserDocumentTypes {
  CitizenshipCard = 'CitizenshipCard',
  DiplomaticCard = 'DiplomaticCard',
  ForeignerIdentityCard = 'ForeignerIdentityCard',
  IdentityCard = 'IdentityCard',
  Nit = 'Nit',
  Passport = 'Passport',
  SafeConduct = 'SafeConduct',
  SpecialPermissionToStay = 'SpecialPermissionToStay',
  TemporaryProtectionPermit = 'TemporaryProtectionPermit'
}

export enum UserStatusTypes {
  Active = 'Active',
  Inactive = 'Inactive',
  PartlyActive = 'PartlyActive'
}

export enum UserTypes {
  Admin = 'Admin',
  SuperAdmin = 'SuperAdmin',
  User = 'User'
}

export type ValidateTokenInput = {
  token: Scalars['String'];
};

export type WebCarrusel = {
  __typename?: 'WebCarrusel';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  descripcion: Scalars['String'];
  id: Scalars['ID'];
  imgen?: Maybe<FileInfo>;
  link: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type WebPlans = {
  __typename?: 'WebPlans';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  expirationDate: Scalars['DateTime'];
  id: Scalars['ID'];
  imgen?: Maybe<FileInfo>;
  isActive: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ValidateUserTokenQueryVariables = Exact<{
  validateTokenInput: ValidateTokenInput;
}>;


export type ValidateUserTokenQuery = { __typename?: 'Query', validateUserToken: { __typename?: 'User', id: string, fullName: string } };

export type CreateUserMutationVariables = Exact<{
  createInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string } };

export type SigninMutationVariables = Exact<{
  signinInput: SigninInput;
}>;


export type SigninMutation = { __typename?: 'Mutation', signin: { __typename?: 'AuthResponse', token: string, user: { __typename?: 'User', id: string, fullName: string, status: UserStatusTypes } } };

export type CardsQueryVariables = Exact<{ [key: string]: never; }>;


export type CardsQuery = { __typename?: 'Query', Cards: Array<{ __typename?: 'Cards', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, description?: string | null, subTitle?: string | null, colorPrincipal?: string | null, colorSegundario?: string | null, isActive: boolean, imageProfile?: { __typename?: 'FileInfo', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, fileName: string, fileExtension: string, fileMode: FileModes, fileMongoId?: string | null, fileUrl?: string | null, transformedFileUrl?: string | null, url: string } | null, cardsEmails: Array<{ __typename?: 'CardsEmails', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, email: string, icono?: string | null }>, cardsPhones: Array<{ __typename?: 'CardsPhones', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, phone: string, icono?: string | null }>, cardsWeb: Array<{ __typename?: 'CardsWeb', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, web: string, icono?: string | null }>, cardsSocial: Array<{ __typename?: 'CardsSocial', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, url: string, typeSocial: string, icono?: string | null }>, cardsAddress: Array<{ __typename?: 'CardsAddress', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, websiteUrl: string, city?: string | null, postalCode?: string | null, country?: string | null, region?: string | null, streetAddress?: string | null }> }> };

export type CardQueryVariables = Exact<{
  cardId: Scalars['ID'];
}>;


export type CardQuery = { __typename?: 'Query', Card: { __typename?: 'Cards', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, description?: string | null, subTitle?: string | null, colorPrincipal?: string | null, colorSegundario?: string | null, isActive: boolean, imageProfile?: { __typename?: 'FileInfo', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, fileName: string, fileExtension: string, fileMode: FileModes, fileMongoId?: string | null, fileUrl?: string | null, transformedFileUrl?: string | null, url: string } | null, cardsEmails: Array<{ __typename?: 'CardsEmails', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, email: string, icono?: string | null }>, cardsPhones: Array<{ __typename?: 'CardsPhones', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, phone: string, icono?: string | null }>, cardsWeb: Array<{ __typename?: 'CardsWeb', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, web: string, icono?: string | null }>, cardsSocial: Array<{ __typename?: 'CardsSocial', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, url: string, typeSocial: string, icono?: string | null }>, cardsAddress: Array<{ __typename?: 'CardsAddress', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, websiteUrl: string, city?: string | null, postalCode?: string | null, country?: string | null, region?: string | null, streetAddress?: string | null }> } };

export type CreateCardFullMutationVariables = Exact<{
  input: CardsCreateInput;
}>;


export type CreateCardFullMutation = { __typename?: 'Mutation', createCardFull: { __typename?: 'Cards', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, description?: string | null, subTitle?: string | null, colorPrincipal?: string | null, colorSegundario?: string | null, isActive: boolean, imageProfile?: { __typename?: 'FileInfo', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, fileName: string, fileExtension: string, fileMode: FileModes, fileMongoId?: string | null, fileUrl?: string | null, transformedFileUrl?: string | null, url: string } | null, user?: { __typename?: 'User', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, name?: string | null, lastName?: string | null, email: string, identificationType?: UserDocumentTypes | null, identificationNumber?: string | null, dateOfBirth?: any | null, phoneNumber?: string | null, address?: string | null, confirmationCode?: string | null, tokenExpoNotification?: string | null, status: UserStatusTypes, phoneVerification: boolean, emailVerification: boolean, type: UserTypes, fullName: string, file?: { __typename?: 'FileInfo', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, fileName: string, fileExtension: string, fileMode: FileModes, fileMongoId?: string | null, fileUrl?: string | null, transformedFileUrl?: string | null, url: string } | null } | null, cardsEmails: Array<{ __typename?: 'CardsEmails', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, email: string, icono?: string | null }>, cardsPhones: Array<{ __typename?: 'CardsPhones', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, phone: string, icono?: string | null }>, cardsWeb: Array<{ __typename?: 'CardsWeb', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, web: string, icono?: string | null }>, cardsSocial: Array<{ __typename?: 'CardsSocial', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, url: string, typeSocial: string, icono?: string | null }>, cardsAddress: Array<{ __typename?: 'CardsAddress', id: string, createdAt: any, updatedAt: any, deletedAt?: any | null, title?: string | null, websiteUrl: string, city?: string | null, postalCode?: string | null, country?: string | null, region?: string | null, streetAddress?: string | null }> } };


export const ValidateUserTokenDocument = gql`
    query ValidateUserToken($validateTokenInput: ValidateTokenInput!) {
  validateUserToken(validateTokenInput: $validateTokenInput) {
    id
    fullName
  }
}
    `;

/**
 * __useValidateUserTokenQuery__
 *
 * To run a query within a React component, call `useValidateUserTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidateUserTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidateUserTokenQuery({
 *   variables: {
 *      validateTokenInput: // value for 'validateTokenInput'
 *   },
 * });
 */
export function useValidateUserTokenQuery(baseOptions: Apollo.QueryHookOptions<ValidateUserTokenQuery, ValidateUserTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidateUserTokenQuery, ValidateUserTokenQueryVariables>(ValidateUserTokenDocument, options);
      }
export function useValidateUserTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidateUserTokenQuery, ValidateUserTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidateUserTokenQuery, ValidateUserTokenQueryVariables>(ValidateUserTokenDocument, options);
        }
export type ValidateUserTokenQueryHookResult = ReturnType<typeof useValidateUserTokenQuery>;
export type ValidateUserTokenLazyQueryHookResult = ReturnType<typeof useValidateUserTokenLazyQuery>;
export type ValidateUserTokenQueryResult = Apollo.QueryResult<ValidateUserTokenQuery, ValidateUserTokenQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($createInput: CreateUserInput!) {
  createUser(createInput: $createInput) {
    id
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createInput: // value for 'createInput'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const SigninDocument = gql`
    mutation Signin($signinInput: SigninInput!) {
  signin(signinInput: $signinInput) {
    token
    user {
      id
      fullName
      status
    }
  }
}
    `;
export type SigninMutationFn = Apollo.MutationFunction<SigninMutation, SigninMutationVariables>;

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      signinInput: // value for 'signinInput'
 *   },
 * });
 */
export function useSigninMutation(baseOptions?: Apollo.MutationHookOptions<SigninMutation, SigninMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SigninMutation, SigninMutationVariables>(SigninDocument, options);
      }
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = Apollo.MutationResult<SigninMutation>;
export type SigninMutationOptions = Apollo.BaseMutationOptions<SigninMutation, SigninMutationVariables>;
export const CardsDocument = gql`
    query Cards {
  Cards {
    id
    createdAt
    updatedAt
    deletedAt
    title
    description
    subTitle
    colorPrincipal
    colorSegundario
    isActive
    imageProfile {
      id
      createdAt
      updatedAt
      deletedAt
      fileName
      fileExtension
      fileMode
      fileMongoId
      fileUrl
      transformedFileUrl
      url
    }
    cardsEmails {
      id
      createdAt
      updatedAt
      deletedAt
      title
      email
      icono
    }
    cardsPhones {
      id
      createdAt
      updatedAt
      deletedAt
      title
      phone
      icono
    }
    cardsWeb {
      id
      createdAt
      updatedAt
      deletedAt
      title
      web
      icono
    }
    cardsSocial {
      id
      createdAt
      updatedAt
      deletedAt
      title
      url
      typeSocial
      icono
    }
    cardsAddress {
      id
      createdAt
      updatedAt
      deletedAt
      title
      websiteUrl
      city
      postalCode
      country
      region
      streetAddress
    }
  }
}
    `;

/**
 * __useCardsQuery__
 *
 * To run a query within a React component, call `useCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCardsQuery(baseOptions?: Apollo.QueryHookOptions<CardsQuery, CardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CardsQuery, CardsQueryVariables>(CardsDocument, options);
      }
export function useCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CardsQuery, CardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CardsQuery, CardsQueryVariables>(CardsDocument, options);
        }
export type CardsQueryHookResult = ReturnType<typeof useCardsQuery>;
export type CardsLazyQueryHookResult = ReturnType<typeof useCardsLazyQuery>;
export type CardsQueryResult = Apollo.QueryResult<CardsQuery, CardsQueryVariables>;
export const CardDocument = gql`
    query Card($cardId: ID!) {
  Card(id: $cardId) {
    id
    createdAt
    updatedAt
    deletedAt
    title
    description
    subTitle
    colorPrincipal
    colorSegundario
    isActive
    imageProfile {
      id
      createdAt
      updatedAt
      deletedAt
      fileName
      fileExtension
      fileMode
      fileMongoId
      fileUrl
      transformedFileUrl
      url
    }
    cardsEmails {
      id
      createdAt
      updatedAt
      deletedAt
      title
      email
      icono
    }
    cardsPhones {
      id
      createdAt
      updatedAt
      deletedAt
      title
      phone
      icono
    }
    cardsWeb {
      id
      createdAt
      updatedAt
      deletedAt
      title
      web
      icono
    }
    cardsSocial {
      id
      createdAt
      updatedAt
      deletedAt
      title
      url
      typeSocial
      icono
    }
    cardsAddress {
      id
      createdAt
      updatedAt
      deletedAt
      title
      websiteUrl
      city
      postalCode
      country
      region
      streetAddress
    }
  }
}
    `;

/**
 * __useCardQuery__
 *
 * To run a query within a React component, call `useCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardQuery({
 *   variables: {
 *      cardId: // value for 'cardId'
 *   },
 * });
 */
export function useCardQuery(baseOptions: Apollo.QueryHookOptions<CardQuery, CardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CardQuery, CardQueryVariables>(CardDocument, options);
      }
export function useCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CardQuery, CardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CardQuery, CardQueryVariables>(CardDocument, options);
        }
export type CardQueryHookResult = ReturnType<typeof useCardQuery>;
export type CardLazyQueryHookResult = ReturnType<typeof useCardLazyQuery>;
export type CardQueryResult = Apollo.QueryResult<CardQuery, CardQueryVariables>;
export const CreateCardFullDocument = gql`
    mutation CreateCardFull($input: CardsCreateInput!) {
  createCardFull(input: $input) {
    id
    createdAt
    updatedAt
    deletedAt
    title
    description
    subTitle
    colorPrincipal
    colorSegundario
    isActive
    imageProfile {
      id
      createdAt
      updatedAt
      deletedAt
      fileName
      fileExtension
      fileMode
      fileMongoId
      fileUrl
      transformedFileUrl
      url
    }
    user {
      id
      createdAt
      updatedAt
      deletedAt
      name
      lastName
      email
      identificationType
      identificationNumber
      dateOfBirth
      phoneNumber
      address
      confirmationCode
      tokenExpoNotification
      status
      phoneVerification
      emailVerification
      type
      file {
        id
        createdAt
        updatedAt
        deletedAt
        fileName
        fileExtension
        fileMode
        fileMongoId
        fileUrl
        transformedFileUrl
        url
      }
      fullName
    }
    cardsEmails {
      id
      createdAt
      updatedAt
      deletedAt
      title
      email
      icono
    }
    cardsPhones {
      id
      createdAt
      updatedAt
      deletedAt
      title
      phone
      icono
    }
    cardsWeb {
      id
      createdAt
      updatedAt
      deletedAt
      title
      web
      icono
    }
    cardsSocial {
      id
      createdAt
      updatedAt
      deletedAt
      title
      url
      typeSocial
      icono
    }
    cardsAddress {
      id
      createdAt
      updatedAt
      deletedAt
      title
      websiteUrl
      city
      postalCode
      country
      region
      streetAddress
    }
  }
}
    `;
export type CreateCardFullMutationFn = Apollo.MutationFunction<CreateCardFullMutation, CreateCardFullMutationVariables>;

/**
 * __useCreateCardFullMutation__
 *
 * To run a mutation, you first call `useCreateCardFullMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCardFullMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCardFullMutation, { data, loading, error }] = useCreateCardFullMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCardFullMutation(baseOptions?: Apollo.MutationHookOptions<CreateCardFullMutation, CreateCardFullMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCardFullMutation, CreateCardFullMutationVariables>(CreateCardFullDocument, options);
      }
export type CreateCardFullMutationHookResult = ReturnType<typeof useCreateCardFullMutation>;
export type CreateCardFullMutationResult = Apollo.MutationResult<CreateCardFullMutation>;
export type CreateCardFullMutationOptions = Apollo.BaseMutationOptions<CreateCardFullMutation, CreateCardFullMutationVariables>;
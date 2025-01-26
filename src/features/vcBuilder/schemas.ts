import { z } from "zod";

const FileSchema = z.object({
  name: z.string(),
  size: z.number(),
  nativeFile: z.object({
    path: z.string(),
    relativePath: z.string()
  })
});

const PhoneSchema = z.object({
  title: z.string(),
  phoneNumber: z.string()
});

const EmailSchema = z.object({
  title: z.string(),
  email: z.string().email()
});

const WebsiteSchema = z.object({
  title: z.string(),
  websiteUrl: z.string().url()
});

const AddressSchema = z.object({
  title: z.string().optional(),
  websiteUrl: z.string().optional(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
  region: z.string(),
  streetAddress: z.string()
});

const CompanySchema = z.object({
  companyName: z.string(),
  job: z.string()
});

const SocialLinkSchema = z.object({
  icon: z.string(),
  title: z.string(),
  subTitle: z.string(),
  socialLink: z.string().optional()
});

export const VCardSchema = z.object({
  qrImage: z.array(FileSchema),
  themeColor: z.string(),
  profileImage: z.array(FileSchema),
  name: z.string(),
  subTitle: z.string(),
  description: z.string(),
  phoneData: z.array(PhoneSchema),
  emailData: z.array(EmailSchema),
  websiteData: z.array(WebsiteSchema),
  addressData: z.array(AddressSchema),
  companyData: CompanySchema,
  socialLinks: z.array(SocialLinkSchema)
});


export type VCardSchemaType = z.infer<typeof VCardSchema>;
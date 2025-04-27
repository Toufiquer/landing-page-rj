export type SingleBoxType = {
  isOpen: boolean
  title1?: string
  description1?: string
  priceText?: string
}
export type BoxType = {
  box1: SingleBoxType
  box2: SingleBoxType
  box3: SingleBoxType
  box4: SingleBoxType
  box5: SingleBoxType
  box6: SingleBoxType
  box7: SingleBoxType
  box8: SingleBoxType
  box9: SingleBoxType
  box10: SingleBoxType
}
export const baseData: BoxType = {
  box1: {
    isOpen: true,
    title1: 'Bangla IT E-Book',
    description1: 'উদ্যোক্তা ও মার্কেটারদের বাস্তব সমস্যার কার্যকর সমাধান',
  },
  box2: {
    isOpen: true,
    description1: 'সীমিত সময়ের অফার: ই বুক এক্সেস করুন এখনই',
  },
  box3: {
    isOpen: true,
    title1: 'সূচিপত্র দেখুন',
  },
  box4: {
    isOpen: true,
    description1: 'সীমিত সময়ের অফার: ই বুক এক্সেস করুন এখনই',
  },
  box5: {
    isOpen: true,
    description1: 'এক জলকে ফটকের রিভিউ !',
  },
  box6: {
    isOpen: true,
    description1: 'সীমিত সময়ের অফার: ই বুক এক্সেস করুন এখনই',
    priceText: 'মাত্র ১৯৯ টাকা ',
  },
  box7: {
    isOpen: true,
    description1:
      'ভাইজান! ই - বুক টা কিন্নায় দেকেন এড  এর খরচ আসলেই কম! ওরিয়ান্স ছাড়াও আরো অনেক ধরণের টিপস অক্কা শপ দিচ্চি ',
  },
  box8: {
    isOpen: false,
  },
  box9: {
    isOpen: false,
  },
  box10: {
    isOpen: false,
  },
}

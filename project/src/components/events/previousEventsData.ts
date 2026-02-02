// events/previousEventsData.ts
export interface PreviousEventExtraData {
    title: string;
    overview: string[];
    highlights?: string[];
    venue: string;
    date: string;
    website?: string;
    email?: string;
    gallery: string[];
  
    // 👇 ADD THESE
    video?: string;
    videoPoster?: string;
  }
  
  export const previousEventsData: Record<string, PreviousEventExtraData> = {
    "funding-tathastu-jan-2026": {
      title: "Funding Tathastu – First Edition",
      overview: [
        "As part of this launch, we introduced our curated fundraising series, Funding Tathastu, designed to move beyond traditional pitch or networking events.",
        "The first edition focused on serious capital conversations between founders and investors.",
      ],
      highlights: [
        "10 fund-ready startups",
        "10 active Angel Investors with near-term deployment intent",
        "Closed-door, outcome-driven discussions",
      ],
      venue: "HARTRON | IAMAI | NASSCOM",
      date: "30th January, 2026",
      website: "www.aurexventures.in",
      email: "aurexventures@zohomail.in",
      video: "https://drive.google.com/file/d/1Zg-QztMcafTaSXF7iw49bbxS8oMreONl/preview",
      videoPoster: "/images/events/tathastu/video-poster.jpg",
      gallery: [
        "https://lh3.googleusercontent.com/pw/AP1GczP03jhXwXaMZ4kRDIKxAorx_ZjrPULzt-1_5TaJJ7GV4lbV9k6fRrFM2veGdNAm1FFseBCOp7mjMuhrh6_aFqDvDyazPfi_-QcfjBQA6fnmwlAKR2A2GpuCJtWE8XYHJ8ZOAgMGFoojjjW7kLHBb7xyEg=w809-h607-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczM4p1rMFcC5C2LrTqoPZLIIklJnEliux1jf89nW9UKO0BQNTs25TArxYPWnrVyUh6LgTcqMtdJJj550hOHtrQLzWNVcQbw7OYw2F0zrXR9gD5bFz-pLkTGlpxfCTOKGI3EHmgkEyhbvo3p70L_SdJh0bg=w809-h607-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczPNLrZobmCthDzwG1CnCjr_yApqThBtZuhjqO6X6iqqiE77CUOfuy1fxAmJHsJ32i4hK28EpQVjmAVbqNxM6It3bZXtpzMibRSn58DLfF6L0yKSa-KCaQp1QhmXRAkbz_2DY_edpfs68ZCPYRHixkYEOQ=w1079-h607-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczMQWWdacltLgych6Cs164hF5N2Pl0qZNQLV830vDoggyDfVV1o5cUFI6JSEMlDnCSvWzmczVoIrKLa3hzoGWnC11jacNW9wEN_BZglP35mUJ_7-iT1qv12lrdaE8wkjcwsxthJTI8i9ciz8lhKG81P2JQ=w1347-h607-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczMSrWoiTa9KrmGer_3pBVod67-Nvxdn0yw1fvijjnWeQALhr-lK9-LUzS75XQB3i9UlFAqNQddal9GngT5gnAf0_UVS4n3bH2jm8772rRM7fzLet-XdsTiQnUxsgoWfl8k913SjS4wk6ymiuSuJrxcw-A=w809-h607-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczMvxbyXiQm_BA-B_qZSYdGeZP1gikaAKbP7O_3y0f7_WtbBeTW_1TItbdxq2nKk26Apg2xmQKS_DfGzoWnROU2-2nXtcxzF_Nj9v5EoDAyXZiy7Vma7ivvra62TbypHEcKA-wqWKRrWaf9-LJl8eK5onA=w809-h607-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczOaP8Nbgx0I7QFY75OLc4VPAL9eQS08U4Nv6KsLl4WbXccT6q24IgevhRSMejTYHI6RPwkzqvvP8_IpzfKu3Nx9l9emf9Ap2_T5mEhU_Yz6BvAu55J3003NGWhaNlXYcRKWdiicuFufXlhxqi_m02kl_w=w1065-h599-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczPVSstP_xWw7mag-gx8k7631n3qVI_2WW-pserDUXlDYq-owVJ_Fso67s_wqAqX6TqJdMppRzUFPiaqhg4PpauIjbIa3mZwjgJ0LbR_iVrMKMvCH2EXwyqmbSapRKEzTv42FJ3P-7aberKZSH78NyBG=w1065-h599-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczMkluBc6mukzBFvn2pxLiHa74lyKXdVb3kHNCP4QikBJbG-wzeiRphcG-SvFfI3Lk3_HsVph2lhDZatRWiy25ovyg60JYSW2wjI9sm4IvRVGZcP4_SxvLmw7GOeUHNzuRdXWxjZEv0-K9O6gLOwl9Wy=w1126-h633-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczO88kIi3hjcskCfyvRs5cYUo4C2vxKtU-gqMFJmRXC7U5XH8FYbYTAL1RFsrmkBp7vJ97KO_U_onf0X5H-nAF2cnvODIcem_eRuVaZ8f6mNWBPSz71dBb6S734GFCPIGoSr_GVkOKgjP37vAzUvPUJrjg=w1065-h599-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczOmRezK-1s_to3xdGRNV6IJZ_qT5cY5SqoBuWZtuXpWzOmhIea3OdoRsyi4Qt73rnu3Lj5RFcYXr1KGHtFJwTqls_AjJuBQwlwY8g7kQYA2xGPVfwDJvPMvA1aNcf_8zGN1ls5blSnVtIR6RXAYXwkLKQ=w1065-h599-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczNOeIv0AxRUzqoTOCCCJbL1_Ufa7Zpv2hbmTWHYvVDuClD6wryeqcVwpWDqRQYW9_2SwUm6uipJS9oKnkZk8h5sHNwWXz4ppxvdKwmxrNBgR2cIlwQTs047DVRvWlUnTjbdTNiHQ8EennoCumaGBUa-Xw=w1065-h599-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczPETi4VJIWKQnqiUilVRJrPu8PyzL--poiBKXouo9Vop6cjf1GYsLjk2Q4CbenpPtV3LnlHDbJ6oK2nGaXEaAXeNPM2x9N3mbYNbUZrGTqMb1wXLj_y4vqIH-aY9W0vFlP7yNnJTvvbnHtokvUEp2Vo1A=w1065-h599-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczPNLrZobmCthDzwG1CnCjr_yApqThBtZuhjqO6X6iqqiE77CUOfuy1fxAmJHsJ32i4hK28EpQVjmAVbqNxM6It3bZXtpzMibRSn58DLfF6L0yKSa-KCaQp1QhmXRAkbz_2DY_edpfs68ZCPYRHixkYEOQ=w1065-h599-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczPwIFO6xLqbOVRDiuEwAtTQSVYG5NcxnQqwJfXRDRfZgXFPvV_2T_DFOQ4mdcABJSoRMQa-rWrisfOtmFGHaBT_4UCfUAtVdGDsAd9zujxREqx9TzpSeRClhk-PjlJEVf4F53VsP7lwNbMl5tojah_ZGQ=w1065-h599-s-no-gm?authuser=0",
     
      ],
    },
  
  }
  
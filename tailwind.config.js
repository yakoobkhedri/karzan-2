/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':'#110E2D',
        'secondary':'#EE5D37',
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      fontFamily: {
        iranYekanThin: "IranYekanFaNum-Thin",
        iranYekanLight: "IranYekanFaNum-Light",
        iranYekanRegular: "IranYekanFaNum-Regular",
        iranYekanMedium: "IranYekanFaNum-Medium",
        iranYekanSemiBold: "IranYekanFaNum-SemiBold",
        iranYekanBold: "IranYekanFaNum-Bold",
        iranYekanExtraBold: "IranYekanFaNum-ExtraBold",
        iranYekanBlack: "IranYekanFaNum-Black",
        iranYekanExtraBlack: "IranYekanFaNum-ExtraBlack",
        iranSansThin: "IranSansFaNum-Thin",
        iranSansLight: "IranSansFaNum-Light",
        iranSansRegular: "IranSansFaNum-Regular",
        iranSansMedium: "IranSansFaNum-Medium",
        iranSansSemiBold: "IranSansFaNum-SemiBold",
        iranSansBold: "IranSansFaNum-Bold",
        iranSansExtraBold: "IranSansFaNum-ExtraBold",
        iranSansBlack: "IranSansFaNum-Black",
        rokhFaNumThin: "RokhFaNum-Thin",
        rokhFaNumLight: "RokhFaNum-Light",
        rokhFaNumRegular: "RokhFaNum-Regular",
        rokhFaNumMedium: "RokhFaNum-Medium",
        rokhFaNumSemiBold: "RokhFaNum-SemiBold",
        rokhFaNumBold: "RokhFaNum-Bold",
        rokhFaNumExtraBold: "RokhFaNum-ExtraBold",
        rokhFaNumBlack: "RokhFaNum-Black",
        MontserratRegular: "Montserrat-Regular",
        MontserratBold: "Montserrat-Bold",
      },
      padding:{
        'custom':'calc((100% - 1392px) / 2)'
       },
      maxWidth:{
        'content':'1450px',
      },
    }
},
}


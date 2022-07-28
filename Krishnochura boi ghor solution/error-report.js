// ১. কিছু বই এর ছবি সহ কার্ড থাকবে।
// amra card dekhte pai but chobi dekhina
// inspact - screen e card er upr click - source file e undefined ashche
// console e kno error nai just element e error
// chobi gula ache image-container er modhe
// image-container html e khujlam nai tar mane div er modhe ache
//html er book container er vitore card gula js er maddhome dhuktese
// amra bahirer kno api use krini amra nijeder banano object of array api use krsi
// script e giye image container khujbo
// 91 no line e book ke consolelog korlam
// book er modhe besh kicu data ache shegulake expand krbo
// 100 no line e book.Image ke  book.image
// ekhn pic dula dekha jachee


// ২. কার্ডের মধ্যে লিখা থাকতেই হবে।
// done


৩. লেখা কার্ড এর বাইরে যাওয়া যাবেনা।
inspact kore likha gulae click korle dekha jae likha gular upr click korle dekha jabe info - container er vitore p tag ache shekhane likha gula ache
info - container likhe js e search
div ashbe shekhane p tag er vitore je { overview } ache shekhanei info gula ache
likha card er bahire na anar jnno 30 char er beshi hole slice kore dibo
overview ke slice kore dbo
98 / 99 line e condition dilam console e beshi ache show korse jegula te 100 + ache
// if (book.overview.length > 100) {
//
//     overview = book.overview.slice(0, 100) + "...";
//   }
//ei condition dilam scrreen dekhbo 100 tar beshi r show hbe na
//kichu likha undefined hye geche
//console e kno bhul nai
//direct let overview er por console korle undefiend ashbe
//tai if er pore korbo
//tao bujhte koshto hole je koi console korbo
//tokhn 2 place ei console krbo
//etai bhalo
//102 e console.log dilam
//kichu kichu line e undefined ache
//ekhn if condition purata comment kore dekhbo purata undefined hye gese shob gulai undefined ache
//abr ager moto overview te book.overview dibo
//tokhn shob data chole ashbe
//tar mane amdr if cond ei problem
//tai
// else {
//     overview = book.overview;
//   }
//   ei cond dilam
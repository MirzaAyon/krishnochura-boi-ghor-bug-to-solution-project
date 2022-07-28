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


// ৩. লেখা কার্ড এর বাইরে যাওয়া যাবেনা।
// inspact kore likha gulae click korle dekha jae likha gular upr click korle dekha jabe info - container er vitore p tag ache shekhane likha gula ache
// info - container likhe js e search
// div ashbe shekhane p tag er vitore je { overview } ache shekhanei info gula ache
// likha card er bahire na anar jnno 30 char er beshi hole slice kore dibo
// overview ke slice kore dbo
// 98 / 99 line e condition dilam console e beshi ache show korse jegula te 100 + ache
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


// ৪. wishlist এ আগে থেকে কার্ড এড হয়ে থাকছে। এটা হতে দেওয়া যাবেনা।
// wishlist e agei boi gula show hoche
// abe home e giye abr wishlist e gele same bhabe aro 6 ta add hochee
// wishlist btn e inspact korle dekha jabe
// switchTab name ekta function dekhache wishlist otar pm
// tar mane switch tab e kahini hoche tai js e giye switchtab e search dibo
// 61 no line e switchTab ache
// wishlist er modhe jkhn click kortesi tkhn switchTab er modhe 'wishlist' func e she dhuktese karon
// karon 66 no line e
// else if (id === "wishlist") {
//     ei place e displayWishlist(); ei func ta call kora ache
//     shekhane getWishlistItems() namer ekta func ke call kortese
//     console e wishlist e click er pore 152 no line e ekta empty arr showing
//     bookList.forEach((book) => {
//         ekhane wishList er jaygae bookList likhe felsi 154 no line e tai full booklist er upr foreach hochee
//         ebar home theke wish list e gele kono data thakbe na


// ৫. এক পেজ থেকে অন্য পেজে গেলে কার্ড এর সংখ্য বেড়ে যায়। এটা থামাতে হবে।

// wish list er jnno koektake select korle wishlist e showing but abr home e eshe abr wish list e gele ager ghula shoho 4+4 = 8 ta showing evabe khali barbe

//love er upr inspact korle dekha jae addtowish list name ekta func ache
//shekhane ('1') emn kore ekta number add krtese
//js e addtowish list likhe search
//112 no line showing
//134 no line er addtowish list e jabo
//ekhane wishlistiteams consolelog dbo
//inspact e giye ek ek bar ek ek ta love e click korle ek ek ta array show hbe ek ta bar bar click korle same ta ashbe na
//tar mane click er problem nai
//dom e probelm
//abr wishlist btn inspact kore 2 ta ke love diye add wishlist e click kore abr home e ashbe book-container id er vitore wishlist id er vitore card ek ek kore barbe
//2 gun 4 gun hbe
//tar mane 151 line e display wishlist func e problem
//157 no line er
// document.getElementById("wishlist").appendChild(div);
//ekhane problem
//tai function er vitorei age etake clean kore nibo
//152 no line er moto er fole ager gula clean hye jabe
//ekhn dekha jache ager gula nai
//ebar wish list e card add hochee kina ta inspact kore dkhbo

// ৬. Add to cart কাজ করেনা।
//add to cart e click korle cart e show hyna
//tai addtocart e inspact krbo
//click korle
//Uncaught ReferenceError: AddToCart is not defined
//eta show kortese
//html er 33 no line e problem
//search in js
//113 no line e addtocart name ekta html onclick showing
//130 no line e addtocart namer ekta function ache
//addToCart speling chooto boro ke thik kore dilam
//tar poro addtocart not working and also no error is showing in console
//addToCart chilo otake addToCart() korlam
//kintu tao kaj hochee na
//131 no line e console.log(id) korlam
//undefined showing
//133 no line e console.log(cart); korlam
//shob undefined showing
// onclick="addToCart()
// //113 no line e eta chilo
// onclick="addToCart('${book.id}')
//eta kore dilam
//id take cala kore dilam
//ekhn cat showing
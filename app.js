




var ids  = ["table1","table2", "table3", "table4"]


let arr = [[
   {
      sno: 1,
      namee: "Bugatti Veyron",
      year: "2014",
      price : "$250",
      dkms : "5000km",
      fuel : "Petrol",
      
   },
   { 
      sno: 2,
      namee: "Bugatti Chiron",
      year: "2013",
      price : "$160",
      dkms : "25600km",
      fuel : "Petrol",
   },
   {
      sno: 3,
      namee: "Bugatti Divo",
      year: "2019",
      price : "$650",
      dkms : "680km",
      fuel : "Petrol",
   },
   {
      sno: 4,
      namee: "Bugatti Centodieci",
      year: "2017",
      price : "$153",
      dkms : "690km",
      fuel : "Diesel",
   }
],

[
   {
      sno: 1,
      namee: "Mercedes-AMG A-Class",
      year: "2009",
      price : "$850",
      dkms : "100km",
      fuel : "Petrol",
   },
   { 
      sno: 2,
      namee: "Mercedes-Benz C-Class",
      year: "2012",
      price : "$190",
      dkms : "100km",
      fuel : "Petrol",
   },
   {
      sno: 3,
      namee: "Mercedes-Benz S-Class",
      year: "2010",
      price : "$950",
      dkms : "6500km",
      fuel : "Diesel",
   },
   {
      sno: 4,
      namee: "EQC from Mercedes-EQ",
      year: "2019",
      price : "$650",
      dkms : "500km",
      fuel : "Petrol",
   }
],

[
   {
      sno: 1,
      namee: "911 Carrera",
      year: "2018",
      price : "$830",
      dkms : "1058Km",
      fuel : "Diesel",
   },
   { 
      sno: 2,
      namee: "911 Carrera GTS",
      year: "2020",
      price : "$9890",
      dkms : "65km",
      fuel : "Petrol",
   },
   {
      sno: 3,
      namee: "911 Carrera 4 GTS",
      year: "2008",
      price : "$650",
      dkms : "910km",
      fuel : "Petrol",
   },
   {
      sno: 4,
      namee: "911 Carrera Cabriolet",
      year: "2023",
      price : "85550",
      dkms : "300km",
      fuel : "Petrol",
   }
],

[
   {
      sno: 1,
      namee: "X1 SUV",
      year: "2018",
      price : "$5830",
      dkms : "358Km",
      fuel : "petrol",
   },
   { 
      sno: 2,
      namee: "X2 Coupe SUV",
      year: "2014",
      price : "$290",
      dkms : "369km",
      fuel : "Petrol",
   },
   {
      sno: 3,
      namee: "X3 SUV",
      year: "2009",
      price : "$650",
      dkms : "60km",
      fuel : "Petrol",
   },
   {
      sno: 4,
      namee: "X3 M SUV",
      year: "2003",
      price : "$5550",
      dkms : "90km",
      fuel : "diesel",
   }
]

];

var pr = document.getElementById(ids[0])


for(var i = 0; i<arr.length; i++){
   
   var hr = document.getElementById(ids[i])
   
   for(var j = 0; j<arr[i].length; j++){
     
      hr.innerHTML += `
   
   <tr>
    <td> ${arr[i][j].sno}</td>
    <td> ${arr[i][j].namee}</td>
    <td> ${arr[i][j].year}</td>
    <td>${arr[i][j].price}</td>
    <td> ${arr[i][j].dkms}</td>
   <td> ${arr[i][j].fuel}</td>
   </tr>

         `}
}





// Each  inside array of object information of car --->

//    Bugati array -->

// let bugatiarr = [
//    {
//       Sno: 1,
//       namee: "Bugatti Veyron",
//       year : "2014",
//       drievenkms : "12,000",
//       fuel : "Petrol",
//       transm : "Manual",
//       price: "$25,000",
//       units: 12
//    }
// ]



// function bugati(printarr ,table){

//    let get = document.getElementById("bugati-row").innerHTML += `
   
//       <tr> 
//          <td> ${printarr[0].Sno} <td/>
//          <td> ${printarr[0].namee} <td/>
//          <td> ${printarr[0].year} <td/>
//          <td> ${printarr[0].drievenkms} <td/>
//          <td> ${printarr[0].fuel} <td/>
//           <td> ${printarr[0].transm} <td/>
//          <td> ${printarr[0].price} <td/>
//          <td> ${printarr[0].units} <td/>
//       </tr>
//    `

     
// }

// bugati(bugatiarr,"bugati-row")

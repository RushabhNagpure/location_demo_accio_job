// const YourIp = document.getElementById("yourIp");
// let ip_address = null;
// function getIP() {
//   fetch("https://api.ipify.org?format=json")
//     .then((response) => response.json())
//     .then((data) => {
//       ip_address = data.ip;

//       console.log("Your public IP address is:", ip_address);
//       YourIp.innerHTML = ip_address;
//     })
//     .catch((error) => {
//       console.error("Error fetching IP:", error);
//     });
// }

// getIP();
// var LocationData;

// const container = document.querySelector(".container");
// const post = document.getElementById("post");
// const dataDiv = document.getElementById("dataDiv");
// const infoDiv = document.getElementById("info-div");
// var locationData;
// var postofficeData;

// var postalCard;

// async function ShowData() {
//   container.style.display = "none";
//   post.style.display = "block";

//   var IPAddress;

//   await $.getJSON("https://api.ipify.org?format=json", function (data) {
//     IPAddress = data.ip;
//   });

//   console.log(IPAddress);

//   await fetch(`https://ipinfo.io/${IPAddress}?token=30dd7efacbc702`)
//     .then((response) => response.json())
//     .then((response) => (locationData = response))
//     .catch(() => {
//       alert("Problem with fetching data");
//     });
//   console.log(locationData);

//   var lagLong = locationData.loc.split(",");
//   var lat = lagLong[0].trim();
//   var long = lagLong[1].trim();
//   console.log(lat, long);
//   // ------------Fatch Data and map-------
//   dataDiv.innerHTML += `
  
//    <nav>
//         <div class="nav">
//           <h1>IP Address : <span id="IpAdd">127.0.01</span></h1>

//           <div class="information">
//             <div class="lat">
//               <h1>Lat:${"  " + lat}</h1>
//               <h1>Long:${"  " + long}</h1>
//             </div>
//             <div id="city">
//               <h1>City:${"  " + locationData.city}</h1>
//               <h1>Region:${"  " + locationData.region}</h1>
//             </div>
//             <div id="organisation">
//               <h1>Organisation:${"  " + locationData.org}</h1>
//               <h1>Hostname:${"  "}Shiva Saini</h1>
//             </div>
//           </div>
//         </div>
//         <div class="map">
//           <h1>Your Current Location</h1>
//           <iframe
//           src="https://maps.google.com/maps?q=${lat}, ${long}&z=15&output=embed"
//           frameborder="0"
//           id="mapFrame"
//         ></iframe>
//         </div>
//       </nav>
//   `;

//   // ------------Time and postal Addresh-------
//   let datetime_str = new Date().toLocaleString("en-US", {
//     timeZone: `${locationData.timezone}`,
//   });

//   await fetch(`https://api.postalpincode.in/pincode/${locationData.postal} `)
//     .then((res) => res.json())
//     .then((res) => res[0])
//     .then((res) => {
//       console.log("postal data" + res);

//       infoDiv.innerHTML += `
//       <h1 id="info">More Information About You</h1>
//           <div class="about-info">
//             <h1>Time Zone:${"  " + locationData.timezone}</h1>
//             <h1>Date And Time:${"  " + datetime_str}</h1>
//             <h1>Pincode:${"  " + locationData.postal}</h1>
//               <h1> Message:${"  " + res.Message}</h1>
//           </div>
//        <div class="postOffice">
//           <h1>Post Offices Near You</h1>
//           <div class="box">
//             <input type="search" name="" id="searchBox" onkeyup="searchKey()"/>
//             <img src="./Vector (3).png" alt="" />
//           </div>
//         </div>
//         <div id="postalCard"></div>
//       `;
//       postalCard = document.getElementById("postalCard");
//       return res.PostOffice;
//     })
//     .then((data) => {
//       console.log(data);

//       postofficeData = data;

//       data.forEach((element) => {
//         console.log(element);
//         postalCard.innerHTML += `
//         <div class="card">
//             <div class="name">Name:${" " + element.Name}</div>
//             <div class="Type">Branch Type:${" " + element.BranchType}</div>
//             <div class="status">Delivery Status:${
//               " " + element.DeliveryStatus
//             }</div>
//             <div class="dis">District:${" " + element.District}</div>
//             <div class="div">Division:${" " + element.Division}</div>
//           </div>
//         `;
//       });
//     })
//     .catch(() => {
//       alert("Problem with fetching data");
//     });
// }

// function searchKey() {
//   postalCard.innerHTML = "";
//   var searchValue = document.getElementById("searchBox").value;
//   // console.log(searchValue);

//   var searchFilter = postofficeData.filter((item) => {
//     var filterValue = JSON.stringify(item);
//     return filterValue.toLowerCase().includes(searchValue.toLowerCase());
//   });
//   searchFilter.forEach((element) => {
//     postalCard.innerHTML += `
//         <div class="card">
//             <div class="name">Name:${" " + element.Name}</div>
//             <div class="Type">Branch Type:${" " + element.BranchType}</div>
//             <div class="status">Delivery Status:${
//               " " + element.DeliveryStatus
//             }</div>
//             <div class="dis">District:${" " + element.District}</div>
//             <div class="div">Division:${" " + element.Division}</div>
//           </div>
//         `;
//   });
// }

window.onload = ()=>{

    fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
    const ip = data.ip;
    const useripaddress= document.getElementById('ipaddy');
    useripaddress.innerHTML=`${ip}`;
})
.catch(error=>console.log(error));

const button = document.getElementById('btn-getstarted');
button.addEventListener('click',geo);

function geo(){
    console.log("geo");
    fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
    const ip2 = data.ip;
    console.log("ipfetch done");

    fetch(`https://ipinfo.io/${ip2}/geo`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        const homepage = document.getElementById('homepage');
        homepage.style.display = 'none';
        const secondpage = document.getElementById('secondpage');
        secondpage.style.display='block';
    
        const newip = document.getElementById('ipaddy2');
        console.log(newip);
        newip.innerHTML = `${ip2} `;
        
        const long = document.getElementById('longspan');
        const lat = document.getElementById('latspan');
        const city = document.getElementById('cityspan');
        const region = document.getElementById('regionspan');
        const org = document.getElementById('orgspan');
        const hostname = document.getElementById('hostnamespan');
        let loc = data.loc.split(",");
        long.innerHTML=`${loc[1]}`;
        lat.innerHTML=`${loc[0]}`;
        city.innerHTML=`${data.city}`;
        region.innerHTML=`${data.region}`;
        org.innerHTML=`${data.org}`;
        hostname.innerHTML=`${data.hostname}`

        const map =document.getElementById('map');
        map.src=`https://maps.google.com/maps?q=${loc[0]}, ${loc[1]}&z=15&output=embed`;

        const timezone = document.getElementById('timezone');
        const datetime = document.getElementById('datetime');
        const pincode = document.getElementById('pincode');

        timezone.innerHTML=`${data.timezone}`;
        console.log(data.timezone);
        let properdatetime = new Date().toLocaleString("en-US",{ timeZone: `${data.timezone}` });
       console.log(properdatetime);
        datetime.innerHTML=`${properdatetime}`;
        pincode.innerHTML=`${data.postal};`

        search(data);


        function search(data){


fetch(`https://api.postalpincode.in/pincode/${data.postal}`)
.then(response=>response.json())
.then(office=>{

    const message = document.getElementById('pinfound');
    //console.log(office[0].Message);
    message.innerHTML=`${office[0].Message}`;
    console.log(office);
    console.log(office[0].PostOffice[0]);
    const searchresult = document.getElementById('searchresult');
    display(office[0].PostOffice);
    
    function display(arr){
        const results = arr.length;
        console.log(results);
        for(let i=0;i<results;i++){

           const newdiv =  document.createElement('div');
           newdiv.classList.add('result');
           newdiv.innerHTML=`<h3>Name : ${arr[i].Name} </h3>
           <h3>Branch : ${arr[i].BranchType} </h3>
           <h3>Delivery ${arr[i].DeliveryStatus}</h3>
           <h3>District : ${arr[i].District}</h3>
           <h3>Division : ${arr[i].Division}</h3>`
           searchresult.appendChild(newdiv);
           
            

        }
    }
})
.catch(error=>console.log(error));
  

        }
        
        
    
    })
    .catch(error=>console.log(error));
    
    
})
    .catch(error => console.log(error));

    
}

const searchterm = document.getElementById('search');
searchterm.addEventListener('keyup',e=>{

    let key = e.target.value;
    console.log(key);
});
}
    





// btn.addEventListener('click',geo);

// function geo(){
// console.log("geo");
//     const homepage = document.getElementById('homepage');
//     // homepage.style.display = 'none';

// }
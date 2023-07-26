// let pageList = [];
//     let cnt = 0;
//     let page = "";

//     const inputVal = () =>{
//         for(let i = 0;i<parseInt($("#inputC").val());i++){
//             pageList.push(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
//             alt="" class="poke-img">
//         <span class="poke-id">1</span>
//         <span class="poke-name">이상해씨</span>
//         <span class="poke-species">씨앗포켓몬</span>
//         <span class="poke-height">身長 : <span>0.7</span> m</span>
//         <span class="poke-weight">体重 : <span>6.9</span> kg</span>`);
//         }
//         console.log(pageList);
//     }

    
//     const leftB = () =>{
//         console.log('leftBtn')
//             cnt--;
//             $(".poke-card").html(`<span>${pageList[cnt]}</span>`);
        
//     }
//     const rightB = () =>{
//         console.log('rightBtn')
//         cnt++;
        
//         $(".poke-card").html(`<span>${pageList[cnt]}</span>`)
//     }
    
//     $("#inputBtn").on("click",inputF);
//     $("#Btn1").on("click",leftB);
//     $("#Btn2").on("click",rightB);

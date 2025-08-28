// heart icon clicked col-1 (first-col)
document.getElementById('heart-icon-btn1').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('heart icon clicked');
    let availablePoint = parseInt(document.getElementById('available-point').innerText);

    let count =  0;
    // count = availablePoint + 1;
    count = count + 1;
    // const finalAvailablePoint = count + availablePoint;
    availablePoint = availablePoint + count;
    document.getElementById('available-point').innerText = availablePoint;
    


    
})
document.getElementById('heart-icon-btn2').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('heart icon clicked');
    let availablePoint = parseInt(document.getElementById('available-point').innerText);

    let count =  0;
    // count = availablePoint + 1;
    count = count + 1;
    // const finalAvailablePoint = count + availablePoint;
    availablePoint = availablePoint + count;
    document.getElementById('available-point').innerText = availablePoint;
    


    
})
document.getElementById('heart-icon-btn3').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('heart icon clicked');
    let availablePoint = parseInt(document.getElementById('available-point').innerText);

    let count =  0;
    // count = availablePoint + 1;
    count = count + 1;
    // const finalAvailablePoint = count + availablePoint;
    availablePoint = availablePoint + count;
    document.getElementById('available-point').innerText = availablePoint;
    


    
})

// heart icon clicked col-2 (second-col)
document.getElementById('heart-icon-btn4').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('heart icon clicked');
    let availablePoint = parseInt(document.getElementById('available-point').innerText);

    let count =  0;
    // count = availablePoint + 1;
    count = count + 1;
    // const finalAvailablePoint = count + availablePoint;
    availablePoint = availablePoint + count;
    document.getElementById('available-point').innerText = availablePoint;
    


    
})

document.getElementById('heart-icon-btn5').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('heart icon clicked');
    let availablePoint = parseInt(document.getElementById('available-point').innerText);

    let count =  0;
    // count = availablePoint + 1;
    count = count + 1;
    // const finalAvailablePoint = count + availablePoint;
    availablePoint = availablePoint + count;
    document.getElementById('available-point').innerText = availablePoint;
    


    
})

document.getElementById('heart-icon-btn6').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('heart icon clicked');
    let availablePoint = parseInt(document.getElementById('available-point').innerText);

    let count =  0;
    // count = availablePoint + 1;
    count = count + 1;
    // const finalAvailablePoint = count + availablePoint;
    availablePoint = availablePoint + count;
    document.getElementById('available-point').innerText = availablePoint;
    


    
})


// heart icon clicked col-3 (third-col)
document.getElementById('heart-icon-btn7').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('heart icon clicked');
    let availablePoint = parseInt(document.getElementById('available-point').innerText);

    let count =  0;
    // count = availablePoint + 1;
    count = count + 1;
    // const finalAvailablePoint = count + availablePoint;
    availablePoint = availablePoint + count;
    document.getElementById('available-point').innerText = availablePoint;
    


    
})

document.getElementById('heart-icon-btn8').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('heart icon clicked');
    let availablePoint = parseInt(document.getElementById('available-point').innerText);

    let count =  0;
    // count = availablePoint + 1;
    count = count + 1;
    // const finalAvailablePoint = count + availablePoint;
    availablePoint = availablePoint + count;
    document.getElementById('available-point').innerText = availablePoint;
    


    
})

document.getElementById('heart-icon-btn9').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('heart icon clicked');
    let availablePoint = parseInt(document.getElementById('available-point').innerText);

    let count =  0;
    // count = availablePoint + 1;
    count = count + 1;
    // const finalAvailablePoint = count + availablePoint;
    availablePoint = availablePoint + count;
    document.getElementById('available-point').innerText = availablePoint;
    


    
})

//-------------------------------------------heart icon clicked complete-------------------------------------------




//---------------------------------------call history and call button clicked start-------------
//coin number set new var
let coinNum = parseInt(document.getElementById('coin-num').innerText); //100 coin

// start: call history added by clicked call button
let callHistoryData = []; //akhane call history data store hobe

// call-btn1 button click event (data added code)
document.getElementById('call-btn1').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('call button clicked');
    //condition
    if(coinNum >= 20){

        alert(' Calling National Emergency 999...');

        coinNum = coinNum - 20;
        document.getElementById('coin-num').innerText = coinNum;
        

        const data = {
        serviceName: 'National Emergency Number',
        phoneNumber: '999',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data);
    // console.log(callHistoryData);

    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = ''; //ager data clear kore dibe
    for(const data of callHistoryData){
        const div = document.createElement('div');
        div.innerHTML = `  <div class="p-[8px]">
              <div class="history-data flex justify-between  w-[100%] h-[80px]  p-[10px] rounded-[8px] bg-[#fafafa]">
                <div>
                     <h1>${data.serviceName}</h1>
                    <p>${data.phoneNumber}</p>
                </div>
                <div>
                    <p>${data.time}</p>
                </div>
            </div>
           </div>`
           historyContainer.appendChild(div);


    }
    }
    else{
        alert('You have not enough coin to make a call, You need at least 20 coins to make a call');
        return;
    }
    
})

// call-btn2 button click event (data added code)
document.getElementById('call-btn2').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('call button clicked');
    //condition
    if(coinNum >= 20){

        alert('Calling Ambulance Service 1994-999999...');

        coinNum = coinNum - 20;
        document.getElementById('coin-num').innerText = coinNum;
        

        const data = {
        serviceName: 'Ambulance Service',
        phoneNumber: '1994-999999',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data);
    // console.log(callHistoryData);

    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = ''; //ager data clear kore dibe
    for(const data of callHistoryData){
        const div = document.createElement('div');
        div.innerHTML = `  <div class="p-[8px]">
              <div class="history-data flex justify-between  w-[100%] h-[80px]  p-[10px] rounded-[8px] bg-[#fafafa]">
                <div>
                     <h1>${data.serviceName}</h1>
                    <p>${data.phoneNumber}</p>
                </div>
                <div>
                    <p>${data.time}</p>
                </div>
            </div>
           </div>`
           historyContainer.appendChild(div);


    }
    }
    else{
        alert('You have not enough coin to make a call, You need at least 20 coins to make a call');
        return;
    }
    
})

// call-btn3 button click event (data added code)
document.getElementById('call-btn3').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('call button clicked');
    //condition
    if(coinNum >= 20){

        alert('Calling Electricity Helpline 16216...');

        coinNum = coinNum - 20;
        document.getElementById('coin-num').innerText = coinNum;
        

        const data = {
        serviceName: 'Electricity Helpline',
        phoneNumber: '16216',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data);
    // console.log(callHistoryData);

    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = ''; //ager data clear kore dibe
    for(const data of callHistoryData){
        const div = document.createElement('div');
        div.innerHTML = `  <div class="p-[8px]">
              <div class="history-data flex justify-between  w-[100%] h-[80px]  p-[10px] rounded-[8px] bg-[#fafafa]">
                <div>
                     <h1>${data.serviceName}</h1>
                    <p>${data.phoneNumber}</p>
                </div>
                <div>
                    <p>${data.time}</p>
                </div>
            </div>
           </div>`
           historyContainer.appendChild(div);


    }
    }
    else{
        alert('You have not enough coin to make a call, You need at least 20 coins to make a call');
        return;
    }
    
})
// call-btn4 button click event (data added code)
document.getElementById('call-btn4').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('call button clicked');
    //condition
    if(coinNum >= 20){

        alert('Calling Police Helpline Number 999...');

        coinNum = coinNum - 20;
        document.getElementById('coin-num').innerText = coinNum;
        

        const data = {
        serviceName: 'Police Helpline <br> Number',
        phoneNumber: '999',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data);
    // console.log(callHistoryData);

    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = ''; //ager data clear kore dibe
    for(const data of callHistoryData){
        const div = document.createElement('div');
        div.innerHTML = `  <div class="p-[8px]">
              <div class="history-data flex justify-between  w-[100%] h-[80px]  p-[10px] rounded-[8px] bg-[#fafafa]">
                <div>
                     <h1>${data.serviceName}</h1>
                    <p>${data.phoneNumber}</p>
                </div>
                <div>
                    <p>${data.time}</p>
                </div>
            </div>
           </div>`
           historyContainer.appendChild(div);


    }
    }
    else{
        alert('You have not enough coin to make a call, You need at least 20 coins to make a call');
        return;
    }
    
})
// call-btn5 button click event (data added code)
document.getElementById('call-btn5').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('call button clicked');
    //condition
    if(coinNum >= 20){

        alert('Calling Women & Child Helpline 109...');

        coinNum = coinNum - 20;
        document.getElementById('coin-num').innerText = coinNum;
        

        const data = {
        serviceName: 'Women & Child Helpline',
        phoneNumber: '109',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data);
    // console.log(callHistoryData);

    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = ''; //ager data clear kore dibe
    for(const data of callHistoryData){
        const div = document.createElement('div');
        div.innerHTML = `  <div class="p-[8px]">
              <div class="history-data flex justify-between  w-[100%] h-[80px]  p-[10px] rounded-[8px] bg-[#fafafa]">
                <div>
                     <h1>${data.serviceName}</h1>
                    <p>${data.phoneNumber}</p>
                </div>
                <div>
                    <p>${data.time}</p>
                </div>
            </div>
           </div>`
           historyContainer.appendChild(div);


    }
    }
    else{
        alert('You have not enough coin to make a call, You need at least 20 coins to make a call');
        return;
    }
    
})
// call-btn6 button click event (data added code)
document.getElementById('call-btn6').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('call button clicked');
    //condition
    if(coinNum >= 20){

        alert('Calling Brac Helpline 16445...');

        coinNum = coinNum - 20;
        document.getElementById('coin-num').innerText = coinNum;
        

        const data = {
        serviceName: 'Brac Helpline',
        phoneNumber: '16445',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data);
    // console.log(callHistoryData);

    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = ''; //ager data clear kore dibe
    for(const data of callHistoryData){
        const div = document.createElement('div');
        div.innerHTML = `  <div class="p-[8px]">
              <div class="history-data flex justify-between  w-[100%] h-[80px]  p-[10px] rounded-[8px] bg-[#fafafa]">
                <div>
                     <h1>${data.serviceName}</h1>
                    <p>${data.phoneNumber}</p>
                </div>
                <div>
                    <p>${data.time}</p>
                </div>
            </div>
           </div>`
           historyContainer.appendChild(div);


    }
    }
    else{
        alert('You have not enough coin to make a call, You need at least 20 coins to make a call');
        return;
    }
    
})
// call-btn7 button click event (data added code)
document.getElementById('call-btn7').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('call button clicked');
    //condition
    if(coinNum >= 20){

        alert('Calling Fire Service Number 999...');

        coinNum = coinNum - 20;
        document.getElementById('coin-num').innerText = coinNum;
        

        const data = {
        serviceName: 'Fire Service Number',
        phoneNumber: '999',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data);
    // console.log(callHistoryData);

    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = ''; //ager data clear kore dibe
    for(const data of callHistoryData){
        const div = document.createElement('div');
        div.innerHTML = `  <div class="p-[8px]">
              <div class="history-data flex justify-between  w-[100%] h-[80px]  p-[10px] rounded-[8px] bg-[#fafafa]">
                <div>
                     <h1>${data.serviceName}</h1>
                    <p>${data.phoneNumber}</p>
                </div>
                <div>
                    <p>${data.time}</p>
                </div>
            </div>
           </div>`
           historyContainer.appendChild(div);


    }
    }
    else{
        alert('You have not enough coin to make a call, You need at least 20 coins to make a call');
        return;
    }
    
})
// call-btn8 button click event (data added code)
document.getElementById('call-btn8').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('call button clicked');
    //condition
    if(coinNum >= 20){

        alert('Calling Anti-Corruption Helpline 106...');

        coinNum = coinNum - 20;
        document.getElementById('coin-num').innerText = coinNum;
        

        const data = {
        serviceName: 'Anti-Corruption Helpline',
        phoneNumber: '106',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data);
    // console.log(callHistoryData);

    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = ''; //ager data clear kore dibe
    for(const data of callHistoryData){
        const div = document.createElement('div');
        div.innerHTML = `  <div class="p-[8px]">
              <div class="history-data flex justify-between  w-[100%] h-[80px]  p-[10px] rounded-[8px] bg-[#fafafa]">
                <div>
                     <h1>${data.serviceName}</h1>
                    <p>${data.phoneNumber}</p>
                </div>
                <div>
                    <p>${data.time}</p>
                </div>
            </div>
           </div>`
           historyContainer.appendChild(div);


    }
    }
    else{
        alert('You have not enough coin to make a call, You need at least 20 coins to make a call');
        return;
    }
    
})
// call-btn9 button click event (data added code)
document.getElementById('call-btn9').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('call button clicked');
    //condition
    if(coinNum >= 20){

        alert('Calling Bangladesh Railway Helpline 163...');

        coinNum = coinNum - 20;
        document.getElementById('coin-num').innerText = coinNum;
        

        const data = {
        serviceName: 'Bangladesh Railway Helpline ',
        phoneNumber: '163',
        time: new Date().toLocaleTimeString()
    }
    callHistoryData.push(data);
    // console.log(callHistoryData);

    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = ''; //ager data clear kore dibe
    for(const data of callHistoryData){
        const div = document.createElement('div');
        div.innerHTML = `  <div class="p-[8px]">
              <div class="history-data flex justify-between  w-[100%] h-[80px]  p-[10px] rounded-[8px] bg-[#fafafa]">
                <div>
                     <h1>${data.serviceName}</h1>
                    <p>${data.phoneNumber}</p>
                </div>
                <div>
                    <p>${data.time}</p>
                </div>
            </div>
           </div>`
           historyContainer.appendChild(div);


    }
    }
    else{
        alert('You have not enough coin to make a call, You need at least 20 coins to make a call');
        return;
    }
    
})


//clear button click event
document.getElementById('Clear-btn').addEventListener('click', function(e){
    e.preventDefault();

    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = '';
    
    callHistoryData = [];
})

//---------------------------------------call history and call button clicked end-------------

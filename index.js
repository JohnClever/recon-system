
{
document.querySelector('#analyse').addEventListener('click', () => {
    //     let chart = document.querySelector("#myChart").getContext('2d');

    //  let chartNom = new Chart(chart, {
    //         type: 'bar',
    //         data: {
    //             labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    //             datasets: [{
    //                 label: 'Population',
    //                 data: [
    //                     '60',
    //                     '40',
    //                     '80',
    //                     '20',
    //                     '100',
    //                     '40',
    //                     '60',
    //                     '40'
    //                 ],
    //                 pointBackgroundColor: '#ff6029',
    //                 borderColor: '#fff',
    //                 pointBorderColor: 'none',
    //                 borderWidth: '1'
    //             }]
    //         },
    //         options: {
    //            elements: {
    //             line:{
    //                 tension:0.1000,
                
    //             }
    //            },
    //            responsive: true,
            
    //         }
    //     });
   
    document.querySelector('.loader').style.display = 'block';
    document.querySelector('.noProduct_page').style.display = 'none';
});

}

{
    var myFunc = function() {
        document.querySelector('#loader').style.display = 'none';
        document.querySelector('.sidebar').classList.toggle('active');
        document.querySelector('.graph').style.display = 'block';
        document.querySelector('.recommendation').style.display = 'block';
        document.querySelector('footer').style.display = 'block'; 

    }
}

document.querySelector('.load').addEventListener('click', ()=>{
    document.querySelector('.loader').style.display = 'block';  
    document.querySelector('.graph').style.display = 'none';
    document.querySelector('.recommendation').style.display = 'none';
    document.querySelector('footer').style.display = 'none'; 
})

var loadFunc = function () {
    document.querySelector('#loader').style.display = 'none';  
    document.querySelector('.noProduct_page').style.display = 'block';
}
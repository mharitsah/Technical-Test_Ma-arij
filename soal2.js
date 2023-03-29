//daftar list benefit
const benefit = [
    {
      id: 1,
      name: "Gaji Pokok",
      amount: 3000000,
      unit: 12
    },
    {
      id: 2,
      name: "Tunjangan Hari Raya (THR)",
      amount: 0,
      unit: 1
    },
    {
      id: 3,
      name: "Uang makan",
      amount: 100000,
      unit: 12
    },
    {
      id: 4,
      name: "Tunjangan shift",
      amount: 0,
      unit: 0.2
    },
];
  
//nilai amount Gaji Pokok akan disalin ke Tunjangan Hari Raya (THR) & Tunjangan shift.
const kriteria = [{
  'Gaji Pokok': ['Tunjangan Hari Raya (THR)', 'Tunjangan shift']
}];

//membuat fungsi bernama copyAmount yang menerima dua parameter yaitu benefit dan kriteria.
function copyAmount(benefit, kriteria) {
  for (let i = 0; i < kriteria.length; i++) {
    //variabel kriteria_key merepresentasikan nama benefit yang akan dijadikan sumber nilai amount. 
    const kriteria_key = Object.keys(kriteria[i])[0];
    //variabel values merepresentasikan benefit yang akan menjadi target untuk menyalin nilai amount
    const kriteria_values = kriteria[i][kriteria_key];
    
    //variabel sourceBenefit merepresentasikan benefit dengan properti name sama dengan nilai dari variabel kriteria_key
    const sourceBenefit = benefit.find(b => b.name === kriteria_key);
    
    if (sourceBenefit) {
      const sourceAmount = sourceBenefit.amount;
            kriteria_values.forEach(k => {
        //variabel bernama targetBenefit merepresentasikan benefit dengan properti name sama dengan nilai dari variabel k yang berisi nama value kriteria target.
        const targetBenefit = benefit.find(b => b.name === k);
        
        if (targetBenefit) {
          //menyalin nilai dari sourceAmount ke amount targetBenefit
          targetBenefit.amount = sourceAmount;
        }
      });
    }
  }
}

//memanggil fungsi copyAmount yang menerima 2 parameter yaitu benefit dan kriteria
copyAmount(benefit, kriteria);
console.log(benefit);
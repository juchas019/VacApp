'use strict'

const windowsBtn = document.querySelectorAll(".btn2");
const windowsClose = document.querySelectorAll(".close-btn");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const appButton = document.getElementById("submit-request");

windowsBtn.forEach((btn) =>
  btn.addEventListener("click", () =>
    btn.id === "modal-btn"
      ? (modal.style.display = "block")
      : (modal2.style.display = "block")
  )
);

windowsClose.forEach((btn) =>
  btn.addEventListener("click", () =>
    btn.id === "close"
      ? (modal.style.display = "none")
      : (modal2.style.display = "none")
  )
);


//-------- datapicker-------------


$("#daterangepicker").daterangepicker(
  {
    autoApply: true,
    locale: {
      direction: "ltr",
      format: "MM/DD/YYYY",
      separator: " - ",
      applyLabel: "Zatwierdź",
      cancelLabel: "Anuluj",
      fromLabel: "Od",
      toLabel: "Do",
      customRangeLabel: "Custom",
      daysOfWeek: ["N", "Po", "W", "S", "C", "Pi", "S"],
      monthNames: [
        "Styczeń",
        "Luty",
        "Marzec",
        "Kwiecień",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpień",
        "Wrzesień",
        "Październik",
        "Listopad",
        "Grudzień",
      ],
      firstDay: 1,
    },
    linkedCalendars: false,
    showCustomRangeLabel: false,
    startDate: "01/04/2022",
    opens: "center",
    endDate: "01/10/2022",
  },
  function (start, end, label) {
    out(start, end, label);
   
  }
);

  
var result;
var correctResult;
  
  
  function out(start, end, label){
    result = countDays(start, end);
    if(result > workerData[7]){
      errorInfo.textContent = `Błąd! Masz tylko ${workerData[7]} dni urlopu. Zaznacz inny zakres dat!`;
  
    
      document.getElementById("submit-request").setAttribute('disabled', true);
    }
    else
    {
      correctResult = workerData[7] - result; 
  
    
      errorInfo.textContent = `Dostępne dni urlopu po złożeniu wniosku: ${correctResult}`;   
      document.getElementById("submit-request").removeAttribute("disabled");
    }
  };
  
  
  function countDays(start, end){
    let vacationStart = new Date(start);
    let vacationEnd = new Date(end);  
    let calcDays = vacationEnd.getTime() - vacationStart.getTime();
  
    var daysTotal = Math.ceil(calcDays / (1000 * 3600 * 24));
    console.log(daysTotal + ' dni urlopu');
  
   
    return(daysTotal);
  
  }
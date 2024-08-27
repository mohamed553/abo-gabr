//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues = 0;
var lang;
var score = 0;

var HTMLquestions = [

    {
        question: "1/ احد المكونات الماديه لجهاز الكمبيوتر ...",
        choices: ["البرمجيات", "وحدات الإخراج", "البيانات", "المعلومات"],
        answer: 2

    },

    {
        question: "2/ تعتبر لوحة المفاتيح من... :",
        choices: ["أ.أجهزة الإخراج", "ب.أجهزة الإدخال", "ج.وسائط التخزين", "د.وحدة النظام "],
        answer: 3

    },
    {
        question: "3/الذاكرة التى يمكن القراءة منها ولا يمكن الكتابة عليها تسمى ب ...",
        choices: ["د.ذاكرة القراءة فقط", "أ.ذاكرة الوصول العشوائي", "ب.الذاكرة النشطة ", "ج.الذاكرة المؤقتة"],
        answer: 1

    }

];

var CSSquestions = [

    {
        question: "1/ البرمجيات المتاحة بصورة مجانية تسمى برمجيات ..",
        choices: ["أ.مفتوحة المصدر", "ب.مغلقة المصدر", "ج.مجهولة المصدر", "د.موثوقة المصدر"],
        answer: 1

    },
    {
        question: "2/ وحدة قياس سرعة المعالج هى ..",
        choices: ["أ. الوات", "ب. الهيرتز", "ج. الأمبير", "د. الجول"],
        answer: 2


    }

];
var JSquestions = [

    {
        question: "1/ موجه الأوامر يسمى فى بعض أنظمة التشغيل ... ",
        choices: ["(JavaScript)", "(variable)", "( Terminal )", " None of the above."],
        answer: 3

    },
    {/*wscubetech*/
        question: " 2/ من مميزات الواجهة الرسومية GUI انها 2/من مميزات الواجهة الرسومية GUI...",
        choices: ["صح", "خطأ"],
        answer: 1

    }

];
var PYquestions = [

    {
        question: "1/ نظام التشغيل Linux هو نظام ...",
        choices: ["ب.مفتوح المصدر", "أ.مغلق المصدر", "ج. غير موثوق", "د. مجهول"],
        answer: 1

    },
    {
        question: "2/ نظام التشغيل ... مفتوح المصدر ويمتاز بسهولة استخدامه ",
        choices: ["أ.Windows7", "ب.Windows10", "د.Mac Os X", "ج.Android"],
        answer: 4

    }

];
var Cquestions = [

    {
        question: "1/ الخلفية فى الشاشة الافتتاحية لنظام تشغيل تمثل ...",
        choices: ["عبارة عن لون أو صورة يمكن تغييرها بواسطة المستخدم", "عبارة عن لون أو صورة لا يمكن تغييرها بواسطة المستخدم", "عبارة عن صورة فقط يمكن تغييرها بواسطة المستخدم", "عبارة عن لون"],
        answer: 1

    },
    {
        question: "2/ الأيقونات ..",
        choices: ["صور", "رموز صغيرة تستخدم فى تشغيل البرامج المختلفة بطريقة سريعة بمجرد النقر المزدوج بالماوس", "رموز صغيرة تستخدم فى تشغيل البرامج المختلفة بطريقة سريعة بمجرد النقر مرة واحدة بالماوس", "احرف"],
        answer: 2

    }

];





//alert(questions.length);
document.getElementById("score").textContent = "Score : " + 0;
document.querySelector(".view-results").style.display = "none";
document.querySelector(".quiz").style.display = "none";
document.querySelector(".final-result").style.display = "none";








document.querySelector(".choose-lang").addEventListener("click", function () {

    lang = document.getElementById("language").value + "questions";
    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[lang].length;

    //    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display = "block";

    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];

    };/*For loop Closed*/

    //    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click", function () {
    //     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
    //     alert(document.querySelector('input[name="options"]:checked').value);

    if (document.querySelector('input[name="options"]:checked').value === window[lang][countQues].choices[window[lang][countQues].answer - 1]) {

        score += 10;
        document.getElementById("score").textContent = "Score : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle correct'>" + (countQues + 1) + "</div>";

    } else {

        score -= 5;
        document.getElementById("score").textContent = "Score : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle incorrect'>" + (countQues + 1) + "</div>";
    };

    if (countQues < window[lang].length - 1) {
        countQues++;
    } else {
        document.querySelector(".submit-answer").style.display = "none";
        document.querySelector(".view-results").style.display = "unset";

    }

    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[lang].length;
    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];

    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click", function () {

    document.querySelector(".final-result").style.display = "block";

    document.querySelector(".solved-ques-no").innerHTML = "You Solved " + (countQues + 1) + " questions of " + document.getElementById("language").value;

    var correct = document.getElementById("ques-view").getElementsByClassName("correct").length;

    document.querySelector(".right-wrong").innerHTML = correct + " were Right and " + ((countQues + 1) - correct) + " were Wrong";

    document.getElementById("display-final-score").innerHTML = "Your Final Score is: " + score;

    if (correct / (countQues + 1) > 0.8) {
        document.querySelector(".remark").innerHTML = "Remark: OutStanding ! :)";
    } else if (correct / (countQues + 1) > 0.6) {
        document.querySelector(".remark").innerHTML = "Remark: Good, Keep Improving.";

    } else if (correct / (countQues + 1)) {
        document.querySelector(".remark").innerHTML = "Remark: Satisfactory, Learn More.";
    } else {
        document.querySelector(".remark").innerHTML = "Remark: Unsatisfactory, Try Again.";
    }

    //    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click", function () {
    location.reload();

});

document.getElementById("about").addEventListener("click", function () {
    alert("Quiz Website Project Created By Digvijay Singh");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/

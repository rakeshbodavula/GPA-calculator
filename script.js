const getPoints = (grade) => {
    switch (grade) {
        case 'O':
            return 10;
        case 'A':
            return 9;
        case 'B':
            return 8;
        case 'C':
            return 7;
        case 'D':
            return 6;
        case 'P':
            return 5;
        case 'F':
            return 0;
    }
}




let count = 1;
let grades = []
let credits = []

const addGrade = (grade)=>{
    const val = document.getElementById(grade).value;
    grades.push(val);
}

const addCredit = (credit)=>{
    const val = document.getElementById(credit).value;
    credits.push(val)
}

const addCourse = () => {
    count++;
    document.querySelector(".input_div div").innerHTML += `<label for="grade_${count}" id="label1_${count}">Grade</label>
    <input type="text" id="grade_${count}" onchange = "addGrade('grade_${count}')">
    <label for="credits_${count}" id="label2_${count}">Credits</label>
    <input type="number" id="credits_${count}" onchange = "addCredit('credits_${count}')">
    <br>`;

    for(i=0;i<grades.length && i<credits.length && i<count-1;i++){
        document.getElementById(`grade_${i+1}`).value = grades[i];
        document.getElementById(`credits_${i+1}`).value = credits[i];
    }
}


const removeCourse = ()=>{
    if(count==0) return alert("No Courses to delete")
    document.getElementById(`credits_${count}`).remove();
    document.getElementById(`grade_${count}`).remove();
    document.getElementById(`label1_${count}`).remove();
    document.getElementById(`label2_${count}`).remove();
        count--;
}


const calculate = () => {
    let credits_sum = 0, grade_sum = 0;
    for (i = 0; i < count; i++) {
        let grade = document.getElementById(`grade_${i + 1}`).value
        grade = grade.toUpperCase()
        if (grade.length !== 1 || (grade != 'O' && grade != 'A' && grade != 'B' && grade != 'C' && grade != 'D' && grade != 'P' && grade != 'F')) {
            return alert('Enter valid Grade!')
        }
        let credit = parseInt(document.getElementById(`credits_${i + 1}`).value)
        let point = getPoints(grade)
        if (credit === undefined || credit < 1) return alert('Enter valid credits')
        credits_sum += credit;
        grade_sum += point * credit;
    }
    console.log(credits_sum,grade_sum)
    const gpa = (grade_sum / credits_sum);
    document.querySelector(".result").textContent = gpa;
}

const input_form_add_btn = document.getElementById("add_btn");
const input_form_remove_btn = document.getElementById("remove_btn");
const output_btn = document.getElementById("calc_btn")

output_btn.addEventListener('click', calculate)

input_form_add_btn.addEventListener('click', addCourse)

input_form_remove_btn.addEventListener('click',removeCourse)
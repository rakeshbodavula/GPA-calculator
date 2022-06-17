const getPoints = (grade)=>{
    grade = grade.toUpperCase()
    if(grade.length!==1 || (grade!='O' && grade!='A' && grade!='B' && grade!='C' && grade!='D' && grade!='P' && grade!='F')){
        return alert('Enter valid Grade!')
    }
    switch(grade){
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



const showGPA = ()=>{
    const count = document.getElementById('course_count').value
    const sem = document.getElementById('sem').value
    let points = 0,total_credits = 0  
    for(let i=0;i<count;i++){
        let grade = document.getElementById(`grade_${i}`).value
        let credits = +document.getElementById(`credits_${i}`).value
        if(getPoints(grade) === undefined) return
        if(getPoints(grade) === 0) {
            document.querySelector('.show_gpa_div').innerHTML=`<h1>Your Sem ${sem} SGPA is : <span> <em>Fail</em> :( <span></h1>`
            return
        }
        points += getPoints(grade)*credits
        total_credits+=credits
    }
    const cgpa = points/total_credits
    document.querySelector('.show_gpa_div').innerHTML=`<h1>Your Sem ${sem} SGPA is : <span>${cgpa}</span></h1>`
}





document.getElementById('enter_grades').addEventListener('click', () => {
    document.querySelector('.input_gpa_div').innerHTML=""
    const course_count = document.querySelector('#course_count').value
    const sem_No = document.querySelector('#sem').value
    if (course_count < 1 || sem_No < 1 || sem_No > 8) {
        return alert('Enter valid details')
    }    
    for (let i = 0; i <course_count; i++) {
        document.querySelector('.input_gpa_div')
                .innerHTML += `<div class="grade_credit_input_div">
                                    <label for="grade_${i}">Grade</label>
                                    <input type="text" value="p" id="grade_${i}">
                                    
                                    <label for="credits_${i}">Credits</label>
                                    <input type="number" value=4 id="credits_${i}">
                                </div>`    
    }                            
    document.querySelector('.input_gpa_div').innerHTML+=`<div class="btn">
    <button onClick = "showGPA()" id="enter_grades">Show GPA</button>
</div>`
})    


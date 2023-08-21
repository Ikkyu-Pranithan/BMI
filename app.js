function BMI()
{
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    
    let meter = height/100
    var result = weight/(meter*meter)
    console.log(result.toFixed(10))
    document.getElementById("BMIResult").innerHTML = "<b>"+result.toFixed(10)+"</b>"
    compare(result)
}

function compare(result){
    if(result < 18.5){
        document.getElementById("CompareBMI").innerHTML = "น้ำหนักต่ำกว่าเกณฑ์ มีความเสี่ยงขาดสารอาหาร กรุณาพบแพทย์"
    }else if(result <= 22.9){
        document.getElementById("CompareBMI").innerHTML = "น้ำหนักสมส่วน โอกาสการเกิดโรคแทรกซ้อน น้อยที่สุด"
    }else if(result <= 29.9){
        document.getElementById("CompareBMI").innerHTML = "อ้วน ภาวะน้ำหนักเกินมาก มีโรคแทรกซ้อนในระยะอ้วนเริ่มต้น"
    }else if(result > 29.9){
        document.getElementById("CompareBMI").innerHTML = "อ้วนมาก ภาวะน้ำหนักเกินมากที่สุดโอกาสการเกิดโรคแทรกซ้อนอย่าง โรคอ้วน"
    } 
}

// ========================================================
// Assignment 5: JavaScript Post and Reply
// ให้นักศึกษาเขียนโค้ด JavaScript เพื่อจัดการการ Post และ Clear ข้อความ
// ========================================================

window.onload = setupFunction;

function setupFunction() {
    // ให้นักศึกษากำหนดชื่อหัวข้อของหน้าเว็บที่ id="top"
   let theTop = document.getElementById("top");
   theTop.innerHTML = "Welcome to the tung tung";
   console.log("test1");

   let postButton = document.getElementById("post");
   let clearButton = document.getElementById("clear");
   postButton.onclick = postFunction;
   clearButton.onclick = clearFunction;
}

// สร้างตัวแปรนับลำดับการโพสต์ชื่อว่า postCount และกำหนดค่าเริ่มต้นเป็น 0
    var postCount = 0;

function postFunction() {
    // TODO: ให้นักศึกษาเขียนโค้ดในส่วนนี้
    // 1. อ่านค่าข้อความจาก textarea (id="message")
    var message = document.getElementById("message")
    var text = message.value;
    // console.log("test");
    // console.log(message);
    // console.log(message.value);
    // 2. นำข้อความไปใส่ในแต่ละกล่องตามลำดับ:
    //    - ครั้งที่ 1 ใส่ใน id="topic"
    if (postCount == 0){
        var input = document.getElementById("topic")
        input.innerHTML = text;
        
    }
    //    - ครั้งที่ 2 ใส่ใน id="reply1"
    else if (postCount == 1)
    {
        var input = document.getElementById("reply1")
        input.innerHTML = text;
        
    }
    //    - ครั้งที่ 3 ใส่ใน id="reply2"
    else if (postCount == 2){
        var input = document.getElementById("reply2")
        input.innerHTML = text;

    }

    // 3. เคลียร์ข้อความใน textarea ให้ว่างหลังจากโพสต์
    message.value = null;
    // 4. เพิ่มค่า postCount
    postCount++;
}

function clearFunction() {
    // TODO: ให้นักศึกษาเขียนโค้ดในส่วนนี้
    // 1. ล้างข้อความใน id="topic", id="reply1", id="reply2"
    let topic = document.getElementById("topic");
    let reply1 = document.getElementById("reply1");
    let reply2 = document.getElementById("reply2");

    topic.innerHTML = null;
    reply1.innerHTML = null;
    reply2.innerHTML = null;
    // 2. ล้างข้อความใน textarea (id="message")
    message.value = null;
    // 3. รีเซ็ตตัวแปร postCount กลับเป็นค่าเริ่มต้น
    postCount = 0;
}

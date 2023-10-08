const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26, days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 25,
            days: "TTh",
            instructor: "Sis A",
        },
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    },
    // enrollStudent: function (sectionNum, add = true) {
    //     const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);

    //     if (sectionIndex >= 0) {
    //         if (add) {
    //             this.sections[sectionIndex].enrolled++;

    //         } else {
    //             this.sections[sectionIndex].enrolled--;
    //         }
    //         renderSections(this.sections);
    //     }
    //     //     dropStudent: function (sectionNum) {
    //     //         const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);

    //     //         if (sectionIndex >= 0) {
    //     //             this.sections[sectionIndex].enrolled--;
    //     //             renderSections(this.sections);
    //     //         }
    //     //     }
    // }
}
function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;

}

function renderSections(sections) {
    const htmlSection = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}<td></tr>`
    );

    document.querySelector('#sections').innerHTML = htmlSection.join("");
}
document.querySelector("#enrollStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").Value;
    aCourse.enrollStudent(sectionNum);
})

document.querySelector("#dropStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
})

setCourseInfo(aCourse);
renderSections(aCourse.sections);
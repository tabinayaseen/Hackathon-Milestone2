document.addEventListener("DOMContentLoaded", function () {
    var _a, _b;
    var form = document.getElementById("resume-form");
    var resumeContent = document.getElementById("resume-content");
    var educationContainer = document.getElementById("education-container");
    var workExperienceContainer = document.getElementById("work-experience-container");
    var educationCount = 1;
    var workExperienceCount = 1;
    // Function to handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var formData = new FormData(form);
        var name = formData.get("name");
        var email = formData.get("email");
        var phone = formData.get("phone");
        var skills = formData.get("skills");
        // Handle profile picture
        var profilePicInput = document.getElementById("profile-pic");
        var profilePicUrl = "";
        if (profilePicInput.files && profilePicInput.files.length > 0) {
            var file = profilePicInput.files[0];
            profilePicUrl = URL.createObjectURL(file);
        }
        // Collect education details
        var educationEntries = Array.prototype.slice.call(document.querySelectorAll(".education-entry"));
        var educationDetails = educationEntries.map(function (entry) { var _a; return ((_a = entry.querySelector("textarea")) === null || _a === void 0 ? void 0 : _a.value) || ""; }).join("<br><br>");
        // Collect work experience details
        var workExperienceEntries = Array.prototype.slice.call(document.querySelectorAll(".work-experience-entry"));
        var workExperienceDetails = workExperienceEntries.map(function (entry) { var _a; return ((_a = entry.querySelector("textarea")) === null || _a === void 0 ? void 0 : _a.value) || ""; }).join("<br><br>");
        var resumeHTML = "\n            <header>\n                ".concat(profilePicUrl ? "<img src=\"".concat(profilePicUrl, "\" alt=\"Profile Picture\">") : '', "\n                <h1>").concat(name, "</h1>\n                <p>Email: ").concat(email, "</p>\n                <p>Phone: ").concat(phone, "</p>\n            </header>\n            <section>\n                <h2>Education</h2>\n                <p>").concat(educationDetails, "</p>\n            </section>\n            <section>\n                <h2>Work Experience</h2>\n                <p>").concat(workExperienceDetails, "</p>\n            </section>\n            <section>\n                <h2>Skills</h2>\n                <p>").concat(skills.split(',').map(function (skill) { return "<span class=\"skill\">".concat(skill.trim(), "</span>"); }).join(', '), "</p>\n            </section>\n        ");
        resumeContent.innerHTML = resumeHTML;
    });
    // Function to add new education entry
    (_a = document.getElementById("add-education")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        educationCount++;
        var newEducation = document.createElement("div");
        newEducation.classList.add("education-entry");
        newEducation.classList.add("dynamic-section");
        newEducation.innerHTML = "\n            <label for=\"education-".concat(educationCount, "\">Education ").concat(educationCount, ":</label>\n            <textarea id=\"education-").concat(educationCount, "\" name=\"education-").concat(educationCount, "\" rows=\"4\"></textarea>\n        ");
        educationContainer === null || educationContainer === void 0 ? void 0 : educationContainer.appendChild(newEducation);
    });
    // Function to add new work experience entry
    (_b = document.getElementById("add-work-experience")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        workExperienceCount++;
        var newWorkExperience = document.createElement("div");
        newWorkExperience.classList.add("work-experience-entry");
        newWorkExperience.classList.add("dynamic-section");
        newWorkExperience.innerHTML = "\n            <label for=\"work-experience-".concat(workExperienceCount, "\">Work Experience ").concat(workExperienceCount, ":</label>\n            <textarea id=\"work-experience-").concat(workExperienceCount, "\" name=\"work-experience-").concat(workExperienceCount, "\" rows=\"4\"></textarea>\n        ");
        workExperienceContainer === null || workExperienceContainer === void 0 ? void 0 : workExperienceContainer.appendChild(newWorkExperience);
    });
});

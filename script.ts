document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const resumeContent = document.getElementById("resume-content") as HTMLDivElement;
    const educationContainer = document.getElementById("education-container") as HTMLDivElement;
    const workExperienceContainer = document.getElementById("work-experience-container") as HTMLDivElement;
    
    let educationCount = 1;
    let workExperienceCount = 1;

    // Function to handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const skills = formData.get("skills") as string;

        // Handle profile picture
        const profilePicInput = document.getElementById("profile-pic") as HTMLInputElement;
        let profilePicUrl = "";
        if (profilePicInput.files && profilePicInput.files.length > 0) {
            const file = profilePicInput.files[0];
            profilePicUrl = URL.createObjectURL(file);
        }

        // Collect education details
        const educationEntries = Array.prototype.slice.call(document.querySelectorAll(".education-entry")) as HTMLElement[];
        const educationDetails = educationEntries.map((entry: HTMLElement) => entry.querySelector("textarea")?.value || "").join("<br><br>");

        // Collect work experience details
        const workExperienceEntries = Array.prototype.slice.call(document.querySelectorAll(".work-experience-entry")) as HTMLElement[];
        const workExperienceDetails = workExperienceEntries.map((entry: HTMLElement) => entry.querySelector("textarea")?.value || "").join("<br><br>");

        const resumeHTML = `
            <header>
                ${profilePicUrl ? `<img src="${profilePicUrl}" alt="Profile Picture">` : ''}
                <h1>${name}</h1>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
            </header>
            <section>
                <h2>Education</h2>
                <p>${educationDetails}</p>
            </section>
            <section>
                <h2>Work Experience</h2>
                <p>${workExperienceDetails}</p>
            </section>
            <section>
                <h2>Skills</h2>
                <p>${skills.split(',').map(skill => `<span class="skill">${skill.trim()}</span>`).join(', ')}</p>
            </section>
        `;

        resumeContent.innerHTML = resumeHTML;
    });

    // Function to add new education entry
    document.getElementById("add-education")?.addEventListener("click", () => {
        educationCount++;
        const newEducation = document.createElement("div");
        newEducation.classList.add("education-entry");
        newEducation.classList.add("dynamic-section");
        newEducation.innerHTML = `
            <label for="education-${educationCount}">Education ${educationCount}:</label>
            <textarea id="education-${educationCount}" name="education-${educationCount}" rows="4"></textarea>
        `;
        educationContainer?.appendChild(newEducation);
    });

    // Function to add new work experience entry
    document.getElementById("add-work-experience")?.addEventListener("click", () => {
        workExperienceCount++;
        const newWorkExperience = document.createElement("div");
        newWorkExperience.classList.add("work-experience-entry");
        newWorkExperience.classList.add("dynamic-section");
        newWorkExperience.innerHTML = `
            <label for="work-experience-${workExperienceCount}">Work Experience ${workExperienceCount}:</label>
            <textarea id="work-experience-${workExperienceCount}" name="work-experience-${workExperienceCount}" rows="4"></textarea>
        `;
        workExperienceContainer?.appendChild(newWorkExperience);
    });
});

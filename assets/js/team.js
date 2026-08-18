/* =========================================================
   SSU · Team JavaScript
   ========================================================= */
   const MEMBERS = [
      {
        name: "Lisa Yuen",
        role: "President",
        photoUrl: "../assets/images/team/lisa.jpg",
        roleBio: "Leads SSU operations, strategy, governance, finances, and representation.",
        personalBio: "Fourth-year stats and neuroscience double major."
      },
      {
        name: "Evelyn Hughes",
        role: "Vice President, Internal",
        photoUrl: "../assets/images/team/evelyn.jpg",
        roleBio: "Oversees internal operations, administration, and executive coordination.",
        personalBio: "Fourth-year applied math specialist and stats major."
      },
      {
        name: "Elodie Fan",
        role: "Vice President, External",
        photoUrl: "../assets/images/team/elodie.jpg",
        roleBio: "Leads partnerships, outreach, sponsorships, and external communications.",
        personalBio: "Third-year statistics and computer science double major."
      },
      {
        name: "Open",
        role: "Co-Director of Academic Affairs",
        photoUrl: "",
        roleBio: "Organizes academic events, workshops, networking, and professional development.",
        personalBio: "Open"
      },
      {
        name: "Open",
        role: "Co-Director of Academic Affairs",
        photoUrl: "",
        roleBio: "Organizes academic events, workshops, networking, and professional development.",
        personalBio: "Open"
      },
      {
        name: "Open",
        role: "Co-Director of Social Affairs",
        photoUrl: "",
        roleBio: "Plans social events and initiatives that strengthen the statistics community.",
        personalBio: "Open"
      },
      {
        name: "Open",
        role: "Co-Director of Social Affairs",
        photoUrl: "",
        roleBio: "Plans social events and initiatives that strengthen the statistics community.",
        personalBio: "Open"
      },
      {
        name: "Open",
        role: "Director of Finance",
        photoUrl: "",
        roleBio: "Manages SSU finances, budgeting, sponsorships, and reimbursements.",
        personalBio: "Open"
      },
      {
        name: "Open",
        role: "Co-Director of Public Relations",
        photoUrl: "",
        roleBio: "Manages SSU branding, social media, communications, and promotions.",
        personalBio: "Open"
      },
      {
        name: "Open",
        role: "Co-Director of Public Relations",
        photoUrl: "",
        roleBio: "Manages SSU branding, social media, communications, and promotions.",
        personalBio: "Open"
      },
      {
        name: "Open",
        role: "Graduating Year Representative",
        photoUrl: "",
        roleBio: "Represents graduating year students, shares feedback, and promotes SSU events and initiatives.",
        personalBio: "Open"
      },
      {
        name: "Open",
        role: "Third Year Representative",
        photoUrl: "",
        roleBio: "Represents third year students, shares feedback, and promotes SSU events and initiatives.",
        personalBio: "Open"
      },
      {
        name: "Open",
        role: "Second Year Representative",
        photoUrl: "",
        roleBio: "Represents second year students, shares feedback, and promotes SSU events and initiatives.",
        personalBio: "Open"
      },
      {
        name: "Open",
        role: "Co-Associate of Academic Affairs",
        photoUrl: "",
        roleBio: "Supports planning and delivery of SSU academic events and programming.",
        personalBio: "Open"
      },
      {
        name: "Open",
        role: "Co-Associate of Academic Affairs",
        photoUrl: "",
        roleBio: "Supports planning and delivery of SSU academic events and programming.",
        personalBio: "Open"
      },
    ];
 
/* =========================================================
   Rendering
   ========================================================= */

    function renderPortrait(member) {
    if (member.photoUrl) {
        return `
        <img 
            src="${member.photoUrl}"
            alt="${member.name}"
            class="member__portrait">
        `;
    }

    return `
        <img 
            src="../assets/images/team/hiring.png"
            alt="${member.name}"
            class="member__portrait">
    `;
    }


    function renderMember(member) {
    return `
        <figure class="member">
        <div class="member__portrait-wrap" tabindex="0">
            ${renderPortrait(member)}

            <div class="member__hover-bio">
            ${member.personalBio}
            </div>
        </div>

        <figcaption>
            <p class="member__name">${member.name}</p>
            <p class="member__role">${member.role}</p>
            <p class="member__bio">${member.roleBio}</p>
        </figcaption>
        </figure>
    `;
    }


    function renderTeam() {
      const teamGrid = document.getElementById("teamGrid");

      if (!teamGrid) return;

      teamGrid.innerHTML = MEMBERS
          .map(renderMember)
          .join("");
    }

    function renderTeamPreview(names) {
      const teamGrid = document.getElementById("teamGrid");

      if (!teamGrid) return;

      const membersToRender = names
        .map(name => MEMBERS.find(m => m.name === name))
        .filter(Boolean)
        .map(member => ({
          ...member,
          photoUrl: member.photoUrl.replace("../assets/", "assets/")
        }));

      teamGrid.innerHTML = membersToRender
        .map(renderMember)
        .join("");
    }

    document.addEventListener("DOMContentLoaded", () => {
      const teamGrid = document.getElementById("teamGrid");
      if (!teamGrid) return;

      if (teamGrid.dataset.names) {
        const names = teamGrid.dataset.names.split(",").map(n => n.trim());
        renderTeamPreview(names);
      } else {
        renderTeam();
      }
    });
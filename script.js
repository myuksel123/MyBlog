// Sample data for adventures (replace this with actual data from backend or database)
const adventuresData = [
    {
      title: "Adventure 1",
      date: "July 21, 2023",
      description: "This is the description for Adventure 1.",
      link: "adventures/adventure1.html"
    },
    {
      title: "Adventure 2",
      date: "July 22, 2023",
      description: "This is the description for Adventure 2.",
      link: "adventures/adventure2.html"
    },
    // Add more adventures here...
  ];
  
  // Function to create blog post cards dynamically
  function createBlogPostCard(blogPost) {
    const card = document.createElement("div");
    card.classList.add("blog-post-card");
  
    card.innerHTML = `
      <h2>${blogPost.title}</h2>
      <p>Date: ${blogPost.date}</p>
      <p>${blogPost.content}</p>
    `;
  
    return card;
  }
  
  // Function to handle the blog post form submission
  function handleBlogPostForm(event) {
    event.preventDefault();
  
    const blogTitle = document.getElementById("blog-title").value;
    const blogDate = document.getElementById("blog-date").value;
    const blogContent = document.getElementById("blog-content").value;
  
    const newBlogPost = {
      title: blogTitle,
      date: blogDate,
      content: blogContent,
    };
  
    adventuresData.unshift(newBlogPost); // Add the new blog post to the beginning of the array
    updateAdventureList();
  
    // Clear the form fields after submission
    document.getElementById("blog-form").reset();
  }
  
  // Function to create adventure cards dynamically
  function createAdventureCards() {
    const adventureList = document.getElementById("adventure-list");
  
    adventuresData.forEach((adventure) => {
      const card = document.createElement("div");
      card.classList.add("adventure-card");
  
      card.innerHTML = `
        <h2>${adventure.title}</h2>
        <p>Posted on <span class="post-date">${adventure.date}</span></p>
        <p>${adventure.description}</p>
      `;
  
      adventureList.appendChild(card);
    });
  }
  
  // Function to update the adventure list on the front page
  function updateAdventureList() {
    const adventureList = document.getElementById("adventure-list");
    adventureList.innerHTML = "";
  
    createAdventureCards(); // Re-create the adventure cards after updating data
  }
  
  // Call the function to create blog post cards and update the list on page load
  document.addEventListener("DOMContentLoaded", () => {
    createAdventureCards();
    updateAdventureList();
  
    // Add event listener to the blog post form submission
    const blogForm = document.getElementById("blog-form");
    blogForm.addEventListener("submit", handleBlogPostForm);
  });
  
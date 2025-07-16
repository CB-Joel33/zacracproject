<template>
  <div>
    <div >
      <div style="width: 100%; height: 100px;">
        <nav class="navbar">
          <div>
            <img src="@/assets/Logo.png" />
          </div>
          <div style="display: flex; justify-content: space-around; align-items: center; gap: 25px;">
           <div style="display: flex; align-items: center; gap: 4px;">
  <p style="margin: 0;">Courses</p>
  <p style="margin-top: 5px;">⌄</p>
</div>

            <router-link to="" style="text-decoration:none;color: black">Reviews</router-link>
            <router-link to="" style="text-decoration:none;color: black">Contact us</router-link>
          </div>
          <div>
           <button class="purplebutton">
          <span style="font-family: 'Poppins', sans-serif; font-weight: 600; ">Start Learning</span>
          <img src="@/assets/send.png" alt="Send Icon" style="width: 13px; height: 13px; margin-left: 10px;" />
           </button>

          </div>
        </nav>
      </div>

      <div class="seconddiv" style="display: grid; grid-template-columns: 50% 50%">
        <div style="width: 100%;">
          <div style="margin-left: 10%; margin-top: 20%;">
            <h2 style="font-weight: 900; font-size: 30px;">What do you want to learn?</h2>
            <div style="position: relative;">
              <input type="text" placeholder="Search for courses" class="searchbar" />
              <img src="@/assets/lets-icons_search-duotone.png" style="position: absolute; left: 439px; top: 18px;" />
            </div>
           <div style="font-size: 14px; display: flex; align-items: center; margin-top: 7px; gap: 7px;">
  <p style="color: #F26100; margin: 0;">Suggestion:</p>
  <router-link to="" >UI/UX</router-link>
  <router-link to="" >Data Analysis</router-link>
</div>

          </div>
        </div>

        <div>
          <img src="@/assets/Frame 576.png" style="margin-top: 25px; display: flex;" />
        </div>
      </div>

      <div style="align-items: center; justify-content: center; display: flex; margin-top: 30px;">
        <img src="@/assets/Trust by 5000+ learners in 15 countries.png" />
      </div>
   
    </div>
<div style="margin-top: 35px; width: 100%; display: flex; justify-content: center;">
  <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px; width: 85%;">
    <img src="@/assets/image 22.png" />
    <img src="@/assets/image 24.png" />
    <img src="@/assets/image 76.png" />
    <img src="@/assets/image 28.png" />
    <img src="@/assets/image 23.png" />
    <img src="@/assets/image 25.png" />
    <img src="@/assets/image-removebg-preview (14) 1.png" />
     <img src="@/assets/image 30.png" />
    
  </div>

  </div>

  <section>

<div style="margin-top: 80px; margin-left: 155px; width: 80%;">
  
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <p style="color: #000066; font-weight: bold; font-size: 25px; margin: 0;">
      Course Catalog
    </p>
    <img src="@/assets/Group (1).png" alt="" style="width: 100px; height: auto;" />
  </div>

  
  <div style="margin-top: -15px;">
    <h6 style="margin: 0; font-weight: normal;">
      Explore expert-led courses designed to equip you with practical, in-demand skills that help you grow,
      succeed, and stay ahead in your career.
    </h6>
  </div>
</div>

<div style=" width:80%;margin-left: 155px;margin-top: 20px">
<div style="display:grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; gap:20px">

  <button class="buttonfilter"><p>All</p></button>
  <button class="buttonfilter"><p>Data</p></button>
  <button class="buttonfilter"><p>Product Design</p></button>
  <button class="buttonfilter"><p>Cybersecurity</p></button>
  <button class="buttonfilter"><p> Content Writing</p></button>
  <button class="buttonfilter"><p> Tech Marketing</p></button>
  
   

</div>
</div>


<div style="width: 80%; margin-left: 155px; margin-top: 20px;">
  <div style="display: grid; grid-template-columns: 0.3fr 0.3fr 0.3fr; gap: 5px;">
    <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px">Data Analysis with Excel and PowerBi</p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
    
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px">  Data Analytics with SQL and PowerBi</p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px">   Data Analytics with Excel and Python</p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px">Data Science with SQL and Python</p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px"> Data Science with Python and Machine Learning</p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px"> Advance Machine learning</p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px">Product Design Foundations</p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px">Intermediate Product Design</p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px">Advanced Product Design</p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px">Project Management Methodology</p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px">Project Management Full course</p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px">Fundamentals of Cybersecurity</p>
        </div>

        <div style="display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px">Ethical Hacking in Cybersecurity</p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px">Defensive Hacking in Cybersecurity</p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px">Front End development</p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px">Back End development </p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
     <div class="coursecards">
      <div style="flex: 1;">
        <img src="@/assets/Rectangle 24138.png" alt="" style="overflow: hidden; object-fit: cover; height: 250px; width: 100%;">
      </div>

      <div style="flex: 1;">
        <div style="margin-left: 10px">
        <div style="font-weight: bold; font-family: 'Poppins', sans-serif;">
          <p style="margin: 0;margin-top: 6px">Full stack development</p>
        </div>

        <div style=" display: flex; align-items: center; gap: 5px;">
          <img src="@/assets/Frame 85.png" alt="" style="width: 30px; height: 16px;">
          <h6 style="opacity: 0.7; font-size: 12px; margin: 0;">80 people enrolled</h6>
        </div>

        <div style="margin-top: 15px;">
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Mode:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Duration:</div>
          <div style="font-size: 13px; font-family: 'Poppins', sans-serif;">Payment Type:</div>
          <p style="font-weight: bold; font-size: 14px;">₦500,000</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 15px; margin-top: 10px;">
          <button class="viewbutton">View Curriculum</button>
          <button class="enrollbutton">Enroll Now</button>
        </div>
        </div>
      </div>
    </div>
    
    


  </div>
</div>

    
       
    
  

  </section>

<section style="height: 300px; background-color: #E8EEE9; margin-top: 60px;">
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;">
    <img src="@/assets/Label.png" alt="" style="margin-bottom: 10px;" />
    <h6 style="margin: 10px 0; max-width: 600px;font-weight: bold">Have you already learned a Tech Skill and want to hone your skills by working on Projects with a Mentor?</h6>
   <button style="padding: 10px 20px; margin-top: 30px; border-radius: 10px; display: flex; align-items: center; gap: 10px; font-family: 'Poppins', sans-serif; font-weight: 500;">
  <span>Explore Project Build & Mentorship Program</span>
  <img src="@/assets/send2.png" alt="Send Icon" style="width: 13px; height: 13px;" />
</button>

  </div>
</section>

</div>
<section>
  <div style="width: 90%; margin: 0 auto; margin-top: 20px;">

    
    <div>
      <img src="@/assets/Frame 524.png" />
    </div>

    
    <div style="margin-top: 7px;"> 
      <p style="margin: 0; font-family: 'Matter', sans-serif;">TESTIMONIALS</p>
      <p style="color: #000066; font-weight: 550; font-size: 35px; margin: 0;">
        Hear from people like you who achieved their Tech Dreams with Technify Academy
      </p>
    </div>

   
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; margin-top: 80px; width: 80%; margin-left: 30px">
      
      <div class="reviewcards"  style="background-color: #DBDBDB">
        <div class="card-content">
          <img src="@/assets/Rectangle 24140.png" alt="Reviewer Photo" style="margin-bottom: 15px;" />

          <div style="text-align: center;">
            <p style="font-weight: 550; margin: 2px 0;">Adebayo Mattews</p>
            <p style="font-family: 'Montserrat', sans-serif; font-size: 13px; margin: 2px 0;">Product Design</p>

            <div style="display: flex; align-items: center; justify-content: center; margin-top: 4px;">
              <div style="color: #158D30; font-size: 18px; line-height: 1;">★★★★★</div>
              <span style="margin-left: 6px; font-size: 10px; color: #555;">4.23 rating</span>
            </div>
          </div>

          <h6 style=" margin-top: 8px; margin-bottom: 0;">
            All membership packages come with a 30-day satisfaction guarantee. If you didn’t mean to set your password, just ignore this email and we’ll forget this ever happened.
          </h6>
        </div>
      </div>

     
      <div class="reviewcards" style="height: 310px; margin-top: -20px">
        <div class="card-content">
          <img src="@/assets/Rectangle 24140.png" alt="Reviewer Photo" style="margin-bottom: 15px;" />

          <div style="text-align: center;">
            <p style="font-weight: 550; margin: 2px 0;">Adebayo Mattews</p>
            <p style="font-family: 'Montserrat', sans-serif; font-size: 13px; margin: 2px 0;">Product Design</p>

            <div style="display: flex; align-items: center; justify-content: center; margin-top: 4px;">
              <div style="color: #158D30; font-size: 18px; line-height: 1;">★★★★★</div>
              <span style="margin-left: 6px; font-size: 10px; color: #555;">4.23 rating</span>
            </div>
          </div>

          <h6 style=" margin-top: 8px; margin-bottom: 0;">
            All membership packages come with a 30-day satisfaction guarantee. If you didn’t mean to set your password, just ignore this email and we’ll forget this ever happened.
          </h6>
        </div>
      </div>

      <div class="reviewcards"  style="background-color: #DBDBDB">
        <div class="card-content">
          <img src="@/assets/Rectangle 24140.png" alt="Reviewer Photo" style="margin-bottom: 15px;" />

          <div style="text-align: center;">
            <p style="font-weight: 550; margin: 2px 0;">Adebayo Mattews</p>
            <p style="font-family: 'Montserrat', sans-serif; font-size: 13px; margin: 2px 0;">Product Design</p>

            <div style="display: flex; align-items: center; justify-content: center; margin-top: 4px;">
              <div style="color: #158D30; font-size: 18px; line-height: 1;">★★★★★</div>
              <span style="margin-left: 6px; font-size: 10px; color: #555;">4.23 rating</span>
            </div>
          </div>

          <h6 style=" margin-top: 8px; margin-bottom: 0;">
            All membership packages come with a 30-day satisfaction guarantee. If you didn’t mean to set your password, just ignore this email and we’ll forget this ever happened.
          </h6>
        </div>
      </div>

    </div>
  </div>
</section>
<footer style="background-color: #131313; color: white; height: 50vh; padding: 40px 60px; margin-top: 120px;">

  <div style="display: grid; grid-template-columns: 1fr 1.5fr 0.5fr; gap: 40px; height: 100%;">

    
    <div>
      <img src="@/assets/Logo (1).png" alt="Logo" />
      <p style=" font-family: 'Abel', sans-serif; font-size: 30px; margin-top: 10px;">Africa’s No. 1 Data<br> School</p>
     <div style="margin:0 -10px ; display: flex; align-items: center;">
  <img src="@/assets/Frame 58.png"   style="margin-right: -25px "/>
  <img src="@/assets/Frame 59.png"  style="margin-right: -25px "/>
  <img src="@/assets/Frame 60.png"  style="margin-right: -25px "/>
  <img src="@/assets/Frame 61.png"  style="margin-right: -25px "/>
</div>

      <p style="font-family: 'Matter', sans-serif; font-size: 10px;opacity: 0.7">© Copyright 2025 All Rights Reserved</p>
    </div>

    
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
      
     
      <div>
        <p style="font-weight: bold;">Quick Links</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Blog</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Pricing</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Instructors</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Careers</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Affiliate Program</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Support</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Terms & Condition</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Privacy Policies</p>
      </div>

      
      <div>
        <p style="font-weight: bold;">Ways to Learn</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Self-paced Courses</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Incubator Programs</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Cohort-based Courses</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Enterprise Learning</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Career-building Paths</p>
      </div>

     
      <div>
        <p style="font-weight: bold;">Courses</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">MS Excel</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">R</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Power BI</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Python</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 12px;">SQL</p>
      </div>
    </div>

  
    <div>
      <p style="font-weight: bold;">Visit Us</p>
      <p style="font-family: 'Matter', sans-serif; font-size: 12px;">2nd Floor, Sovereign Trust Insurance Building, Alagbaka, Akure, Ondo State, Nigeria.</p>
      <p style="font-family: 'Matter', sans-serif; font-size: 12px;">Be the first to know about our exciting offers on Data Science, AI, and ML courses.</p>
     
     <div> <input type="email" placeholder="Type email Here..." style="font-family: 'Matter', sans-serif; font-size: 9px; color: white; background-color: black; border: none; border-bottom: 2px solid #333385; height: 30px;width: 170px"/>
      <img src="@\assets\Frame 527.png"/>
      </div>
    </div>

  </div>
</footer>


  
</template>

<script>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:wght@400;600;700&display=swap');

*{
    padding: 0;
    margin: 0;
    
}
h1 , h2, h3 , h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
}
body {
    font-family: 'Poppins', sans-serif;
}
.navbar{

    width: 100%;
    justify-content: space-around;
    align-items: center;
    display: flex;
    margin-top: 36px;
    z-index: 100;
    position: absolute;
}
.dropbtn{
    border: none;
    background-color: white;
    outline: none;

}
.purplebutton{
    border-radius: 7px;
    background-color: #4D148C;
    width: 200px;
    height: 47px;
    color: white;
    font-weight: 500;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
   

}
.seconddiv{

    width: 82%;
    height: 450px;
    background-color: #E8EEE9;
    margin-left: 9%;
    border-radius: 20px;
    margin-top: 40px;

}
.searchbar{
    width: 85%;
    height: 10px;
    margin-top: 10px;
    border-radius: 10px;
    padding: 20px;
    border: none;
    outline: none;
    font-size: 15px;
}
.buttonfilter{

  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;      
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  white-space: nowrap; 
  height: 35px;
  
}
.coursecards{

  width: 330px;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.viewbutton{
   text-align: center;
   height: 40px;
   width: 150px;
   padding: 5px;
   opacity: 0.6;
   border-radius: 5px;
   background-color: white;
}
.enrollbutton{
  text-align: center;
   text-align: center;
   height: 40px;
   width: 150px;
   padding: 5px;
   border-radius: 5px;
   background-color: #4D148C;
   color: white;
   border: none;
}
.reviewcards {
  height: 265px;
  width: 400px;
  border: 1px solid #DBDBDB;
  border-radius: 20px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
}
</style>
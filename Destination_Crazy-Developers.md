# Destination
Web-Devlopement Project
## Team Name:Crazy Developers

## Description
  ### In the race of education students seeks various courses to explore themselves but end up with confusion the content of which course is best for them.This apps makes it easier for them to read the review ,ratings and overview of the course provided by major online learning platforms like udemy,coursera,edx etc.We intend to bring all this courses in single app may it be finance,programming,marktting or any other topic of interest.

### There are so many online educational platforms offering courses on various topics. These domains include
 1. COMPUTER SCIENCE
 2. DATA SCIENCE
 3. ENGINEERING
 4. MATHS 

You just have to select the domain and find the topic that you want to learn!

## Features
 1. Persue any goal
 2. Best free courses with ratings
 3. Earn certificate
 4. Starting today 
 5. Fast load time
 6. and many more

## Links
- website link-https://course-destination.herokuapp.com/
- Drive link -[SCREENSHOTS](https://drive.google.com/drive/folders/1--DoNhxr2Y7h8s3Br1JxZPmGnwi3rqVu)
- Demo Video -[Video](https://drive.google.com/file/d/1BTRR0zFYdLsWrKfIktd3iQYTS-QvoOAy/view?usp=drivesdk)

##Technology stack
Tools and technologies that you learnt and used in the project.

 1. Flask - For Backend 
 2. HTML CSS JS and Bootstrap - For Frontend
 3. BeautifulSoup (bs4) - For Web Scrapping


## Web Scrapping
### We use http://www.openculture.com/ for this
```javascript
url = "http://www.openculture.com/"
course_dict = [{},{},{},{}]  #list of 6 dictionaries
sub_url=["computer_science_free_courses","free-online-data-science-courses",
         "math_free_courses","engineering_free_courses"]
csv_files=["computerscience","datascience","math","engineering"]
#extraction of data
for i in range(len(sub_url)):
    course_no = 0
    url_new = url + sub_url[i]
    response = requests.get(url_new)
    data = response.text
    soup = BeautifulSoup(data, 'html.parser')
    contents = soup.find_all("ul")
    for content in contents:
        names = content.find_all("strong")
        for name in names:
            if len(name.text)>=6:
                course_link = []
                course_name = name.text
                courses = name.find_next_siblings("a")
                course_provider = name.find_parent("li").text[len(course_name)+1:]
                count =0
                for course in courses:
                    if count<=3 :
                        course_link.append(course.get('href'))
                        count +=1

                #print(course_no,course_name,course_provider,course_link)
                (course_dict[i])[course_no] = [course_name,course_provider,course_link]
                course_no += 1

            else:
                continue
```

## Project Setup
### Clone the repository or download it. For cloning you must have GIT installed. For downloading git refer this link.

### Type this command in the git bash terminal
```javascript
 git clone https://github.com/ekta-chandu/Inheritance-2021.git
```
### You must also have python and pip installed

### Then you must install the required dependencies. In this repository 'requirements.txt' contains a list of all dependencies required for the project. The virutal environment is already present in the repository. You just have to activate it using the following command by opening cmd in the project directory.
-For windows
```javascript
 venv/Scripts/activate
```
-For Ubuntu
```javascript
    source venv/bin/activate
```

### If you are not using the virtual environment then enter the command given below
```javascript
    pip install -r requirements.txt
```
## Setting up the configuration key
### Before running this web application on your machine you have to make some changes in coursespot/init.py file.

-Replace the os.environ.get('SECRET_KEY') variable with a random string
-Replace os.environ.get('EMAIL_USER') and os.environ.get('EMAIL_PASS') with the email id and password of the account from which you want to send email.
-or you can add these variables to your machine environment(more secure)
## Usages
### On the terminal enter
```javascript
    python run.py
```
## Applications
### The Course  suggests courses available in various domains from across many websites offering them.

## Team Members
   - Ekta Chandak-
     emchandak_b2@et.vjti.ac.in
   - Samiksha Naik-
     ssn.nasik@gmail.com
   - Anuja Ingle-
     aringle_b20@et.vjti.ac.in
   - Pratiksha Naik-
     prnaik_b20@et.vjti.ac.in

     
## Mentors
   - Chahat Baghele
   - Rakesh Rajpurohit
   

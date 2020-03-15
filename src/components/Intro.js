import React from 'react'

// why PM?
import pr1 from '../assets/productrelease1.png'
import citrics from '../assets/citrics.png'
import bio from '../assets/biopm.png'

// favorite web app 
import twitter2 from '../assets/twitter2.png'
import twitter3 from '../assets/twitter3.png'

// product expansion
import p1 from '../assets/product1.png'
import p2 from '../assets/product2.png'
import p3 from '../assets/product3.png'
import p4 from '../assets/product4.png'
import p5 from '../assets/product5.png'


// user feedback 
import uf1 from '../assets/userfeedback1.png'
import uf2 from '../assets/userfeedback2.png'
import uf4 from '../assets/userfeedback4.png'

function Intro(){

     return(
          <div className="column-container">

               <div className="question-container first-container" id="introduction">
               <div className="column-title-container">
                    <div className="column-title">
                         {/* <p className="title">👋🏻 Introduction </p> */}
                         <p className="title">Introduction </p>
                    </div>
                    <div className="column-content-container">
                         <div className="column-content">
                              <p className="content">Everywhere I go, I try and surround myself in unfamiliar environments. You get to meet some pretty cool people that way. I spent 6 years studying Buddhism with monks, worked with ketamine psychotherapists, and delivered street medicine to homeless populations. All of this has broadened my understanding of people and myself.</p>
                              <div className="content-labels">
                                   <div className="button-container">
                                        <button className="button-label red">Empathy</button>
                                        <button className="button-label lightblue">Human connection</button>
                                   </div>
                                   <div className="emoji-container">
                                        {/* <p className="emoji">🙏🏼</p> */}
                                   </div>
                              </div>
                         </div>
                         <div className="column-content">
                              <p className="content">I graduated with a background in healthcare. Under mentorship by John Greathouse of Rincon Venture and his Technology Management Program, I transitioned over to the tech industry to leverage my interpersonal skills and passion for scalable impact.</p>
                              <div className="content-labels">
                                   <div className="button-container">
                                        <button className="button-label green">Healthcare</button>
                                        <button className="button-label purple">Technology management</button>
                                        {/* <button className="button-label darkblue">Scalable impact</button> */}
                                   </div>
                                   <div className="emoji-container">
                                        {/* <p className="emoji">📚</p> */}
                                   </div>
                              </div>
                         </div>
                         <div className="column-content">
                              <p className="content">I love studying film in my free time. I've always been intrigued by the way cinematographers use elements like colors, architecture, and music scores to elicit emotions from their audience. It's these details that leave a lasting impression.</p>
                              <div className="content-labels">
                                   <div className="button-container">
                                        <button className="button-label yellow">Film art</button>
                                        <button className="button-label pink">User experience</button>
                                   </div>
                                   <div className="emoji-container">
                                        {/* <p className="emoji">🍿</p> */}
                                   </div>
                              </div>
                         </div>
                         
                    </div>
               </div> 


               <div className="column-title-container">
                    <div className="column-title">
                         {/* <p className="title">🎮 Connection to IGN </p> */}
                         <p className="title">Connection to IGN </p>
                    </div>
                    <div className="column-content-container">
                         {/* <div className="column-content">
                              <p className="content">Growing up, IGN was my friendly neighborhood game informant. Whether it was Pokemon or Animal Crossing, IGN was my north star that led me to all the latest updates. </p>
                              <div className="content-labels">
                                   <div className="button-container">
                                        <button className="button-label orange">Nostalgia</button>
                                   </div>
                                   <div className="emoji-container">
                                   </div>
                              </div>
                         </div> */}
                         <div className="column-content">
                              <p className="content">Early exposure to IGN movie reviews sparked my passion for film art. The videos taught me how to analyze plots, understand character arcs, and experience the movie through the lens of the producer. IGN has been an integral part in all my hobbies, providing the catalyst for what my interests are today. </p>
                              <div className="content-labels">
                                   <div className="button-container">
                                        <button className="button-label teal">Film art</button>
                                        <button className="button-label lightpink">Catalyst</button>
                                   </div>
                                   <div className="emoji-container">
                                        {/* <p className="emoji">🙏🏼</p> */}
                                   </div>
                              </div>
                         </div>
                         <div className="column-content">
                              <p className="content">I want to be a part of the IGN family because I want to serve a wide range of users on a large scaled platform. It challenges me to continue expanding my scope of knowledge on different user bases, and follows my values of integrating myself in new environments and new people. <br /> <br /> IGN is the perfect place where I can use technical background and interpersonal experience to help users immerse themselves in their hobbies and passions. </p>
                              <div className="content-labels">
                                   <div className="button-container">
                                        <button className="button-label royalblue">User driven</button>
                                        <button className="button-label yellow">Values based</button>
                                   </div>
                                   <div className="emoji-container">
                                        {/* <p className="emoji">🙏🏼</p> */}
                                   </div>
                              </div>
                         </div>
                         {/* <div className="column-content">
                              <p className="content">IGN has been the cornerstone behind so many of my fondest memories. My motivation to work at IGN is deeply rooted in ensuring that the wide spectrum of users, whether professional, casual, or users looking to satisfy their nostalgia, are provided with the experience needed to navigate their own hobbies and interests. To me, having the opportunity to give back to a company like IGN would be like a main character completing their character arc. </p>
                              <div className="content-labels">
                                   <div className="button-container">
                                        <button className="button-label red">Empathy</button>
                                        <button className="button-label darkblue">Leadership</button>
                                   </div>
                                   <div className="emoji-container">
                                        <p className="emoji">🙏🏼</p>
                                   </div>
                              </div>
                         </div> */}
                         
                    </div>
               </div> 
               <div className="column-title-container">
                    <div className="column-title">
                         {/* <p className="title smaller">🐶 Why you should hire me</p> */}
                         <p className="title smaller">Why you should hire me</p>
                    </div>
                    <div className="column-content-container">
                         <div className="column-content">
                              <p className="content">My background in engineering has trained me to become an effective technical problem solver. Additionally, coding has taught me how to work with different disciplines like data scientists, UX designers, and stakeholders. <br /> <br /> My technical experience in communicating, roadmapping, and building products can benefit IGN’s products when considering optimization and scalability. </p>
                              <div className="content-labels">
                                   <div className="button-container">
                                        <button className="button-label pink">Full stack engineer</button>
                                        <button className="button-label green">Technical problem solver</button>
                                   </div>
                                   <div className="emoji-container">
                                        {/* <p className="emoji">🙏🏼</p> */}
                                   </div>
                              </div>
                         </div>
                         <div className="column-content">
                              <p className="content">I taught myself UI/UX design out of love for film. It felt natural because I understood the importance of design in visual storytelling. <br /> <br /> My experience in user research, problem framing, prototyping, and testing can be useful at IGN, where storytelling and visuals play an integral part in capturing the essence of video games and movies. </p>
                              <div className="content-labels">
                                   <div className="button-container">
                                        <button className="button-label purple">User-centered design</button>
                                        <button className="button-label lightblue">Visual storytelling</button>
                                   </div>
                                   <div className="emoji-container">
                                        {/* <p className="emoji">🙏🏼</p> */}
                                   </div>
                              </div>
                         </div>
                         <div className="column-content">
                              <p className="content">A unique trait I bring is my healthcare background. The insights I've gained from working with patients have changed the way I’ve approached products. For instance, working in ketamine psychiatry taught me how certain business practices and application designs amplify anxiety. I use these anecdotes to build applications that account for accessibility and usability for all users.</p>
                              <div className="content-labels">
                                   <div className="button-container">
                                        <button className="button-label red">Patient insights</button>
                                        <button className="button-label darkblue">Accessibility design</button>
                                   </div>
                                   <div className="emoji-container">
                                        {/* <p className="emoji">🙏🏼</p> */}
                                   </div>
                              </div>
                         </div>
                         {/* <div className="column-content">
                              <p className="content">I am a pretty sentimental person. And part of that comes from my craving for human connection. I love sharing moments with people because when I look back, those memories have a lot of life to them. As a product manager, this is a crucial trait because you are constantly engaging with not only your teammates, but also your stockholders, and more importantly, your users! </p>
                              <div className="content-labels">
                                   <div className="button-container">
                                        <button className="button-label red">Empathy</button>
                                        <button className="button-label darkblue">Leadership</button>
                                   </div>
                                   <div className="emoji-container">
                                        <p className="emoji">🙏🏼</p>
                                   </div>
                              </div>
                         </div> */}
                         
                    </div>
               </div> 
               </div>


               <div className="question-container alternative" id="why-pm">

                    <div className="column-title-alternative">
                         <p className="title">Why product management? </p>
                    </div>

                    <div className="question-container">
                         <div className="column-title-container">
                              <div className="column-content-container">
                                   <div className="column-content">
                                        <p className="content">There is something about bringing people together that brings me a deep sense of fulfillment. <br /><br />A big part of it comes from the anticipation and the buildup. Moments where everyone is coming together for a common cause, and adrenaline is what kicks my focus into overdrive - those are the moments when I feel most alive. <br /><br />When I work at the intersection of design, engineering, and business, it feels like this all the time. </p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label pink">Leadership</button>
                                                  <button className="button-label yellow">Teamwork</button>
                                                  <button className="button-label green">Intersection</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="column-content">
                                   <img className="content-image" src={citrics} alt="citrics" />
                              </div>
                         </div>

                         <div className="column-title-container">
                              <div className="column-content-container">
                                   <div className="column-content">
                                        <p className="content">Many of my habits share similarities to PM fundamentals. At the beginning of each week, I like to sketch out a ‘game plan’ - a tentative overview of my schedule and goals I’d like to accomplish. I commonly share this with friends because it ensures a level of accountability. It also leaves less room for distractions and allows me to end the day knowing I did something meaningful. </p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label royalblue">Organization</button>
                                                  <button className="button-label orange">Accountability</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="column-content">
                                   <img className="content-image" src={pr1} alt="product release" />
                              </div>
                         </div> 

                         <div className="column-title-container">
                              <div className="column-content-container">
                                   <div className="column-content">
                                        <p className="content">As a visual learner, I used roadmaps to connect concepts when I studied biology. Whenever big trips came up, I’d often construct checklists and itineraries in the form of roadmaps. </p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label purple">Roadmaps</button>
                                                  {/* <button className="button-label darkblue">Leadership</button> */}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="column-content">
                                   <img className="content-image" src={bio} alt="bio" />
                              </div>
                         </div>

                         
                    </div>


               </div>





               <div className="question-container alternative" id="web-product">
                    <div className="column-title-alternative">
                         <div className="column-title">
                              <p className="title"> Favorite web product</p>
                         </div>
                    </div>
                    <div className="question-container">
                         <div className="column-title-container">
                              <div className="column-content-container">
                                   <div className="column-content">
                                        <p className="content">I can’t imagine working without Twitter because it is my direct pulse to the world. <br /> <br /> I use Twitter primarily to learn the latest products and designs in tech. It’s important that I know what ideas or designs are trending because it ensures that I am using the best practices and latest research when conceptualizing roadmaps. <br /><br />This ultimately affects the overall experience of a product and how likely users will come back.</p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label lightblue">Twitter</button>
                                                  <button className="button-label green">Connection</button>
                                                  <button className="button-label yellow">Learn best practices</button>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="column-content">
                                             <img className="content-image twitter" src={twitter2} alt="twitter" />
                                   </div>
                              </div>
                         </div>
                         <div className="column-title-container">
                              <div className="column-content-container">
                                   <div className="column-content">
                                        <p className="content">The power of Twitter comes from the real-time conversations that take place from users on a global scale. Twitter’s timeline and hashtags have changed the way people keep up with current news, especially in tech and politics. There isn’t a social or economic barrier that is keeping someone from sharing their thoughts.</p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label pink">Real-time interactions</button>
                                                  <button className="button-label purple">Global scale</button>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="column-content">
                                        <img className="content-image twitter" src={twitter3} alt="twitter" />
                                   </div>
                              </div>
                         </div>
                         <div className="column-title-container">
                              <div className="column-content-container">
                                   <div className="column-content">
                                        <p className="content">Direct messaging on Twitter is not ideal because of how slow and clunky the UI is. It feels as though group messaging is a separate entity, largely because of how many clicks it takes to access or start a conversation. This is a waste because the way you connect on Twitter feels more natural than any social media app. In contrast, apps like Facebook Messenger or Snapchat messaging allows users to seamlessly transition between the app’s primary functionality and engaging in private messaging. </p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label lightblue">Direct messages</button>
                                                  <button className="button-label orange">Slow UI</button>
                                                  <button className="button-label lightpink">Heavy clicking</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div> 



               <div className="question-container alternative" id="user-testing">
                    <div className="column-title-alternative">
                         <p className="title">User testing </p>
                    </div>
                    <div className="question-container">
                         <div className="column-title-container">
                              <div className="column-content-container">
                                   <div className="column-content">
                                        <p className="content">Growing up, I spent 6 years studying Buddhism. My time at these local monasteries allowed me to develop a keen sense of empathy. It allowed me to take on leadership roles such as class president and recruitment director during high school and college.</p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label red">Empathy</button>
                                                  <button className="button-label darkblue">Leadership</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="column-title-container">
                              <div className="column-content-container">
                                   <div className="column-content">
                                        <p className="content">Growing up, I spent 6 years studying Buddhism. My time at these local monasteries allowed me to develop a keen sense of empathy. It allowed me to take on leadership roles such as class president and recruitment director during high school and college.</p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label red">Empathy</button>
                                                  <button className="button-label darkblue">Leadership</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="column-title-container">
                              <div className="column-content-container">
                                   <div className="column-content">
                                        <p className="content">Growing up, I spent 6 years studying Buddhism. My time at these local monasteries allowed me to develop a keen sense of empathy. It allowed me to take on leadership roles such as class president and recruitment director during high school and college.</p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label red">Empathy</button>
                                                  <button className="button-label darkblue">Leadership</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div> 


               <div className="question-container alternative" id="product-expansion">
                    <div className="column-title-alternative">
                         <p className="title">Product team gameplan</p>
                    </div>
                    <div className="question-container">
                         <div className="column-title-container">
                              <div className="column-content-container">
                                   <div className="column-content">
                                        <p className="content">Method 1: Use social media platforms to bring brand awareness. Manipulating how the content is delivered, such as through memes or Tik Toks, allow the show to trend viraly through the fanbase themselves. This is commonly used by music producers to draw interest. <br /><br/> An infamous example is Lil Nas X, who edited funny videos to his songs to gain new followers. As a result, his song Old town road hit diamond and stayed at #1 for 19 weeks. </p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label pink">Social media presence</button>
                                                  <button className="button-label teal">Virality marketing</button>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="column-content">
                                        <img className="content-image" src={p4} alt="product" />
                                   </div>
                                   <div className="column-content">
                                        <img className="content-image" src={p2} alt="product" />
                                        <img className="content-image" src={p3} alt="product" />
                                   </div>
                                   {/* <div className="column-content">
                                        <img className="content-image" src={p3} alt="product" />
                                   </div> */}
                              </div>
                         </div>
                         <div className="column-title-container">
                              <div className="column-content-container">
                                   <div className="column-content">
                                        <p className="content">Method 2: Creating an online presence of the characters in the show also allows users to engage with the show, even when they’re not watching it. Striking an emotional chord in users creates a bond that goes beyond content. <br /><br />Brand loyalty becomes powerful when people resonate with a character or a story, so capitalizing on these aspects of the show ensures that viewers will stick around for the long run. You can further this by using marketing techniques like brand partnerships or blog articles relevant to the user’s interests to further their engagement.</p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label royalblue">Emotional bond</button>
                                                  <button className="button-label orange">Brand loyalty</button>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="column-content">
                                        <img className="content-image" src={p5} alt="product" />
                                   </div>
                                   <div className="column-content">
                                        <img className="content-image" src={p1} alt="product" />
                                   </div>
                              </div>
                         </div>
                         <div className="column-title-container">
                              <div className="column-content-container">
                                   {/* <div className="column-content">
                                        <p className="content"></p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label red">Empathy</button>
                                                  <button className="button-label darkblue">Leadership</button>
                                             </div>
                                        </div>
                                   </div> */}
                                   <div className="column-content">
                                        <p className="content">
                                             How long are people staying on a video?
                                             <br />
                                             If users lose interest in the beginning of the video, focus on making it more engaging for users to stick around. 
                                        </p>
                                   </div>
                                   <div className="column-content">
                                        <p className="content">
                                             What videos are users coming back to? 
                                             <br />
                                             Categorize the shows and invest more resources on the categories that are doing well. It’s what they want!
                                        </p>
                                   </div>
                                   <div className="column-content">
                                        <p className="content">
                                             What kind of users are coming back to the video? 
                                             <br />
                                             Understanding user demographics and curtailing content to satisfy their expectations.
                                        </p>
                                   </div>
                                   <div className="column-content">
                                        <p className="content">
                                             What users are leaving and why? 
                                             <br />
                                             Gather info on which user base is not engaged with the content and understanding why.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div> 


               <div className="question-container alternative" id="user-feedback">
                    <div className="column-title-alternative">
                         <p className="title">User feedback</p>
                    </div>

                    <div className="question-container">
                         <div className="column-title-container">
                              <div className="column-content-container">
                                   <div className="column-content">
                                        <p className="content">Growing up, I spent 6 years studying Buddhism. My time at these local monasteries allowed me to develop a keen sense of empathy. It allowed me to take on leadership roles such as class president and recruitment director during high school and college.</p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label red">Empathy</button>
                                                  <button className="button-label darkblue">Leadership</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="column-content pivot-table-container">
                              <img className="content-image" src={uf4} alt="pivot table" />
                              <img className="content-image" src={uf2} alt="pivot table" />
                              <img className="content-image" src={uf1} alt="pivot table" />
                         </div>
                    </div>
                    
                    {/* <div className="question-container">
                         <div className="column-title-container">
                              <div className="column-content-container">
                                   <div className="column-content">
                                        <p className="content">Growing up, I spent 6 years studying Buddhism. My time at these local monasteries allowed me to develop a keen sense of empathy. It allowed me to take on leadership roles such as class president and recruitment director during high school and college.</p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label red">Empathy</button>
                                                  <button className="button-label darkblue">Leadership</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="column-title-container">
                              <div className="column-content-container">
                                   <div className="column-content">
                                        <p className="content">Growing up, I spent 6 years studying Buddhism. My time at these local monasteries allowed me to develop a keen sense of empathy. It allowed me to take on leadership roles such as class president and recruitment director during high school and college.</p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label red">Empathy</button>
                                                  <button className="button-label darkblue">Leadership</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="column-title-container">
                              <div className="column-content-container">
                                   <div className="column-content">
                                        <p className="content">Growing up, I spent 6 years studying Buddhism. My time at these local monasteries allowed me to develop a keen sense of empathy. It allowed me to take on leadership roles such as class president and recruitment director during high school and college.</p>
                                        <div className="content-labels">
                                             <div className="button-container">
                                                  <button className="button-label red">Empathy</button>
                                                  <button className="button-label darkblue">Leadership</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div> */}
               </div> 




               
          </div>
     )
}

export default Intro 
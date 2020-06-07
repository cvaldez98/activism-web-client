import React from 'react';
import PlaceHolder from '../../../client/src/PlaceHolder'

function SampleEmail() {
    return (
        <main>
          <b>An email script for your local police department and local representatives. This is what an example would look like.</b>

          <p>
            Dear Mayor <PlaceHolder> </PlaceHolder> and Councilpeople <PlaceHolder> </PlaceHolder>, <PlaceHolder> </PlaceHolder>, and <PlaceHolder> </PlaceHolder>,</p>

          <p>I am a resident of <PlaceHolder> </PlaceHolder> and I am getting in touch because I am deeply troubled by what I have seen recently of the treatment of Black Americans by police in police departments nationwide. I would like to know what kinds of safeguards our town's police department has in place to prevent incidents of racism by police.</p>

          <p>Are <PlaceHolder> </PlaceHolder> PD required to wear body cameras to record their responses to calls on video? Does the department perform any kind of anti-racism training for officers? Are new recruits screened in any way to prevent the hiring of racists, for instance through looking at social media posts? How does internal affairs investigate and respond to reports of discrimination against officers?</p>

          <p>If these safeguards are not in place, they certainly should be, and I do not support my local taxes paying to fund a police department that perpetuates racism and violence. Services I would rather see funded include: mental health professionals, crisis de-escalators, support for those suffering domestic abuse and addiction in our community, to name only a few.   </p>

          <p>Thank you for your attention to my concerns. I hope to hear back from you soon.</p>

          <p>Signed, <PlaceHolder> </PlaceHolder></p>
        </main>
    );
}

export default SampleEmail
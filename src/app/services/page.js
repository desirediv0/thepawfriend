"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const PHONE = "+91 9211338489";
const WHATSAPP = "https://wa.me/919211338489";

const CONTACT_IMG = {
  vet: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1200&auto=format&fit=crop",
  vaccination: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200&auto=format&fit=crop",
  emergency: "https://images.unsplash.com/photo-1584553421349-3557471bed79?q=80&w=1200&auto=format&fit=crop",
  grooming: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1200&auto=format&fit=crop",
  boarding: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=1200&auto=format&fit=crop",
  training: "https://images.unsplash.com/photo-1541599468348-e96984315921?q=80&w=1200&auto=format&fit=crop",
  online: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop",
};

const SERVICES = [
  { id:"veterinary-consultation", icon:"medical_services", title:"Veterinary Consultation", cardDesc:"Thoughtful clinical guidance for everyday health concerns, in the comfort of home.", img:CONTACT_IMG.vet, duration:"45–60 minutes", priceBadge:"₹299", heroPrice:"From ₹299 (puppy consultation); adult consultation ₹499", trustLine:"Registered veterinarian • Doorstep consultation", popular:false, showPackages:true, quickFacts:[{label:"Ideal Pet / Age",value:"All life stages"},{label:"Service Type",value:"Doorstep consultation"},{label:"Best For",value:"New symptoms, preventive check-ins and follow-up questions"},{label:"Duration",value:"45–60 minutes"},{label:"Professional Assigned",value:"Registered veterinarian"},{label:"Location",value:"Doorstep across Delhi NCR"}], whyText:"Choose veterinary consultation for new symptoms, preventive check-ins and follow-up questions. The visit leads with your practical concern, explains what the appointment can realistically do, and lets you know when a different service or professional referral is more appropriate.", benefits:[{icon:"visibility",t:"Earlier recognition of changes worth investigating"},{icon:"assignment_turned_in",t:"Clear next-step plan and home-care guidance"},{icon:"home",t:"Less travel stress for suitable home consultations"},{icon:"description",t:"A documented consultation summary for continuity of care"}], includesGroup:{title:"Every Consultation Includes",items:["History review and owner discussion","Nose-to-tail clinical examination appropriate to the visit","Vital observations where clinically appropriate","Assessment, care plan and prescription/referral when indicated"]}, individualServices:{title:"Individual Services",items:[{name:"Rapid Kit Test – Parvo",price:"₹1,199"},{name:"Rapid Kit Test – Distemper",price:"₹1,999"},{name:"Consultation – Puppy",price:"₹299"},{name:"Consultation – Adult",price:"₹499"}],note:"We perform all types of treatment, with a dedicated team of vet surgeons across 5 clinics in Delhi NCR."}, productsUsed:["Clinical examination kit","Thermometer and basic assessment tools","Clean, single-use consumables where required","Digital visit summary"], suitableForText:"Suitable for all life stages. Best fit: new symptoms, preventive check-ins and follow-up questions.", beforeAppointment:["Keep recent reports, medicines and vaccination record ready.","Allow a quiet, well-lit area for examination.","Do not give new medicines unless a veterinarian has advised it."], duringService:["The veterinarian confirms the concern and history.","Your pet is observed and examined at a comfortable pace.","Findings and options are explained before next steps are agreed."], afterCare:["Follow the written plan exactly and ask before changing doses.","Monitor the signs identified during the consultation.","Use urgent care if red-flag symptoms appear or your pet worsens."], expectedResults:["A clear understanding of the concern","Practical next steps","Appropriate home-care or referral guidance"], recommendedFrequency:"As advised by the veterinarian; book promptly when a new concern appears.", frequencyTone:"info", comparisonGuidance:{chooseWhen:["Your need matches new symptoms, preventive check-ins and follow-up questions.","The appointment's stated scope matches the concern."],chooseAlt:["Your main need is better served by Vaccination, Emergency Care, or service eligibility is not confirmed.","There are urgent symptoms, a safety risk or a need for diagnostic/clinic care."]}, commonProblems:["Vomiting or loose stool","Itching, coat or skin changes","Reduced appetite or energy","Limping or discomfort","Medication and follow-up questions"], related:["vaccination","emergency-care","online-consultation"], faqs:[{q:"Can a home consultation replace every clinic visit?",a:"No. The veterinarian will advise clinic diagnostics, imaging, admission or referral whenever that is safer or more appropriate."},{q:"Will medicines be provided?",a:"Only when clinically indicated and in accordance with the veterinarian's direction."},{q:"What should I prepare?",a:"Recent records, current medicines, a quiet examination area and a clear description of when the concern started."},{q:"How do I book?",a:"Choose Book this service, provide pet and location details, then select an available slot."}] },
  { id:"vaccination", icon:"vaccines", title:"Vaccination", cardDesc:"A calm, record-led vaccination visit designed around your pet's age and history.", img:CONTACT_IMG.vaccination, duration:"20–30 minutes", priceBadge:"₹999", heroPrice:"From ₹999 for individual vaccination; Puppy Vaccination Package ₹7,399", trustLine:"Registered veterinarian • Doorstep preventive care", popular:true, showPackages:true, quickFacts:[{label:"Ideal Pet / Age",value:"Puppies, kittens and adults"},{label:"Service Type",value:"Doorstep preventive care"},{label:"Best For",value:"Starting, continuing or catching up a veterinarian-approved schedule"},{label:"Duration",value:"20–30 minutes"},{label:"Professional Assigned",value:"Registered veterinarian"},{label:"Location",value:"Doorstep across Delhi NCR"}], whyText:"Choose vaccination when starting, continuing or catching up a veterinarian-approved schedule.", benefits:[{icon:"shield",t:"Helps maintain protection against preventable infectious disease"},{icon:"fact_check",t:"Creates a clear, traceable vaccination record"},{icon:"flight_takeoff",t:"Supports safer social, boarding and travel planning"},{icon:"event_available",t:"Makes it easier to identify the next due date"}], includesGroup:{title:"Every Vaccination Visit Includes",items:["Eligibility and wellness check before vaccination","Review of previous vaccination record","Veterinarian-administered vaccine when suitable","Record update, due-date guidance and post-vaccination advice"]}, subItems:[{name:"Puppy Vaccination Package",unit:"one-time package",price:"₹7,399",fields:[{label:"Ideal Age",value:"From 35th day"}],overview:"A complete staged vaccination schedule for puppies from 35 days old.",included:["35th day — Puppy DP","50th day — DHPPIL","60th day — Canine Corona","71st day — DHPPIL (booster)","90th day — Canine Corona (booster)","90th day — Anti Rabies","120th day — Anti Rabies (booster)","120th day — Kennel Cough","Deworming"]},{name:"Adult Dog Vaccination Package",unit:"one-time package",price:"₹3,999",fields:[{label:"Ideal Age",value:"1 year & above"}],overview:"Annual core vaccination package for adult dogs.",included:["Anti Rabies","DHPPIL","Canine Corona","Kennel Cough","Deworming"]},{name:"Kitten Vaccination Package",unit:"one-time package",price:"₹4,999",fields:[{label:"Ideal Age",value:"From 60th day"}],overview:"A complete staged vaccination schedule for kittens.",included:["60th day — Tricat","90th day — Tricat (booster)","95th day — Anti Rabies","125th day — Anti Rabies (booster)","Deworming"]},{name:"Cat Vaccination Package",unit:"one-time package",price:"₹1,999",fields:[{label:"Ideal Age",value:"1 year & above"}],overview:"Annual core vaccination package for adult cats.",included:["Tricat","Anti Rabies","Deworming"]}], individualServices:{title:"Individual Services",items:[{name:"Puppy DP",price:"₹1,199"},{name:"Anti Rabies",price:"₹999"},{name:"DHPPIL (9-in-1)",price:"₹1,199"},{name:"Kennel Cough",price:"₹1,499"},{name:"Tricat",price:"₹1,199"}],note:"We perform all types of treatment, with a dedicated team of vet surgeons across 5 clinics in Delhi NCR."}, productsUsed:["Cold-chain handled vaccines","Single-use sterile needles and syringes","Vaccination record and reminder workflow","Observation guidance for owner"], suitableForText:"Suitable for puppies, kittens and adults.", beforeAppointment:["Share the existing vaccination card and any prior reaction history.","Reschedule if your pet appears unwell unless the veterinarian advises otherwise.","Keep your pet calmly restrained and accessible."], duringService:["The veterinarian confirms age, history and present wellness.","The vaccine is administered only if suitable on the day.","You receive the updated record and what to watch for."], afterCare:["Keep activity gentle for the rest of the day.","Offer water and observe appetite and behaviour.","Contact the veterinarian promptly for facial swelling, breathing difficulty or other urgent change."], expectedResults:["An up-to-date record","A clear next-dose reminder","Post-vaccination guidance"], recommendedFrequency:"Follow the veterinarian-approved age, product and local-risk schedule.", frequencyTone:"info", comparisonGuidance:{chooseWhen:["Your need matches starting, continuing or catching up a veterinarian-approved schedule."],chooseAlt:["Your main need is better served by Veterinary Consultation, Boarding, or service eligibility is not confirmed."]}, commonProblems:["Unclear puppy or kitten vaccine timeline","Missed booster","Lost or incomplete record","Boarding or travel readiness"], related:["veterinary-consultation","boarding","online-consultation"], faqs:[{q:"Can my pet be vaccinated when unwell?",a:"The veterinarian will assess this. Vaccination is commonly postponed when a pet is unwell."},{q:"What if a booster was missed?",a:"Bring the record. The veterinarian will advise the appropriate catch-up plan."},{q:"Are reactions possible?",a:"Mild tiredness can occur. Urgent symptoms such as breathing difficulty or facial swelling require immediate veterinary help."},{q:"How do I book?",a:"Choose Book this service, provide pet and location details, then select an available slot."}] },
  { id:"full-grooming", icon:"spa", title:"Full Grooming", cardDesc:"A complete coat-and-hygiene reset for a clean, comfortable, well-finished pet.", img:CONTACT_IMG.grooming, duration:"90–120 minutes", priceBadge:"₹1,799", heroPrice:"₹1,799 per session", trustLine:"Professional groomer • Doorstep grooming", popular:true, showPackages:true, quickFacts:[{label:"Ideal Pet / Age",value:"3 months+"},{label:"Service Type",value:"Doorstep grooming"},{label:"Best For",value:"Regular hygiene, coat maintenance and a polished finish"},{label:"Duration",value:"90–120 minutes"},{label:"Professional Assigned",value:"Professional groomer"},{label:"Location",value:"Doorstep across Delhi NCR"}], whyText:"Choose full grooming for regular hygiene, coat maintenance and a polished finish.", benefits:[{icon:"water_drop",t:"Cleaner skin and coat"},{icon:"air",t:"Reduced loose hair and everyday odour"},{icon:"visibility",t:"Better visibility of coat changes worth noting"},{icon:"self_improvement",t:"Comfort through coat, nail and hygiene care"}], includesGroup:{title:"Everything Included",items:["Coat and skin visual check","Bath with coat-appropriate shampoo and conditioner","Blow dry, brushing and de-shedding as appropriate","Nail trim, ear and eye-area cleaning","Hygiene trim and coat shaping agreed before service","Finishing check and home-care guidance"]}, productsUsed:["Pet-safe shampoo and conditioner selected for coat needs","Sanitised clippers, combs and scissors","Low-stress handling and towel/blow-dry process","Disposable or sanitised contact surfaces"], suitableForText:"Suitable for pets 3 months and older.", beforeAppointment:["Share allergies, skin concerns, bite history and desired coat length.","Provide access to water and a safe power outlet.","Give a comfort break before the appointment."], duringService:["The groomer confirms the desired finish and checks coat condition.","Work proceeds in calm stages with breaks if your pet needs them.","Any severe matting or skin irritation is discussed before proceeding."], afterCare:["Keep the coat dry and clean for the rest of the day.","Brush to the recommended coat-type routine.","Contact a veterinarian for persistent redness or discomfort."], expectedResults:["Fresh, clean coat","Neater hygiene areas","Reduced loose coat","A clear maintenance routine"], recommendedFrequency:"Usually every 4–8 weeks, adjusted for coat type, lifestyle and veterinary advice.", frequencyTone:"info", comparisonGuidance:{chooseWhen:["Your need matches regular hygiene, coat maintenance and a polished finish."],chooseAlt:["Your main need is better served by Mini Grooming, Bathing, or service eligibility is not confirmed."]}, commonProblems:["Matted or tangled coat","Loose hair and shedding","Everyday odour","Overgrown nails","Untidy hygiene areas"], related:["mini-grooming","bathing","trimming","tick-flea-bath"], faqs:[{q:"Will you shave a matted coat?",a:"The groomer will assess matting and explain the safest option before work begins."},{q:"Can you groom puppies?",a:"Yes, with age-appropriate, gentle handling; confirm your puppy's age and vaccination status at booking."},{q:"How long does it take?",a:"Most appointments take 90–120 minutes; coat condition and pet comfort can change the timing."},{q:"How do I book?",a:"Choose Book this service, provide pet and location details, then select an available slot."}] },
  { id:"mini-grooming", icon:"content_cut", title:"Mini Grooming", cardDesc:"A lighter maintenance visit between full grooming appointments.", img:CONTACT_IMG.grooming, duration:"45–60 minutes", priceBadge:"₹1,399", heroPrice:"₹1,399 per session", trustLine:"Professional groomer • Doorstep grooming", popular:false, showPackages:true, quickFacts:[{label:"Ideal Pet / Age",value:"3 months+"},{label:"Service Type",value:"Doorstep grooming"},{label:"Best For",value:"Freshening up clean coats and keeping hygiene areas neat"},{label:"Duration",value:"45–60 minutes"},{label:"Professional Assigned",value:"Professional groomer"},{label:"Location",value:"Doorstep across Delhi NCR"}], whyText:"Choose mini grooming for freshening up clean coats and keeping hygiene areas neat.", benefits:[{icon:"content_cut",t:"Keeps nails and hygiene areas maintained"},{icon:"air",t:"Reduces loose surface coat"},{icon:"home",t:"Maintains comfort between full sessions"},{icon:"favorite",t:"Builds positive grooming familiarity"}], includesGroup:{title:"Everything Included",items:["Quick coat assessment","Brushing and light de-shedding","Nail trim and ear/eye-area cleaning","Hygiene-area tidy-up","Finishing brush and home-care note"]}, productsUsed:["Sanitised grooming tools","Coat-appropriate brushes and combs","Low-stress handling"], suitableForText:"Suitable for pets 3 months and older.", beforeAppointment:["Tell us about recent skin concerns or grooming sensitivities.","Ensure the coat is reasonably dry and free of heavy mud."], duringService:["The groomer confirms the maintenance goal.","Core hygiene tasks are completed with comfort breaks as needed."], afterCare:["Brush regularly as advised.","Book full grooming if matting, heavy undercoat or a full bath-and-style is needed."], expectedResults:["Neater everyday appearance","Maintained nails and hygiene areas","Less loose surface coat"], recommendedFrequency:"Every 2–4 weeks between full grooming appointments.", frequencyTone:"info", comparisonGuidance:{chooseWhen:["Your need matches freshening up clean coats and keeping hygiene areas neat."],chooseAlt:["Your main need is better served by Full Grooming, Bathing, or service eligibility is not confirmed."]}, commonProblems:["Between-grooming untidiness","Long nails","Face and hygiene-area upkeep","Light shedding"], related:["full-grooming","bathing","trimming"], faqs:[{q:"Does mini grooming include a bath?",a:"No. Choose Bathing or Full Grooming when a wash is needed."},{q:"Is it suitable for a matted coat?",a:"No. A full grooming assessment is safer for matting."},{q:"Can I request a haircut?",a:"Only a minor tidy-up where suitable; book Full Grooming for a fuller style."},{q:"How do I book?",a:"Choose Book this service, provide pet and location details, then select an available slot."}] },
  { id:"bathing", icon:"shower", title:"Bathing", cardDesc:"A gentle, coat-appropriate wash and dry for a fresher everyday routine.", img:CONTACT_IMG.grooming, duration:"45–60 minutes", priceBadge:"₹899", heroPrice:"₹899 per session", trustLine:"Professional groomer • Doorstep hygiene care", popular:false, showPackages:true, quickFacts:[{label:"Ideal Pet / Age",value:"3 months+"},{label:"Service Type",value:"Doorstep hygiene care"},{label:"Best For",value:"Routine freshness after outdoor play, travel or everyday coat care"},{label:"Duration",value:"45–60 minutes"},{label:"Professional Assigned",value:"Professional groomer"},{label:"Location",value:"Doorstep across Delhi NCR"}], whyText:"Choose bathing for routine freshness after outdoor play, travel or everyday coat care.", benefits:[{icon:"cleaning_services",t:"Removes everyday dirt and odour"},{icon:"water_drop",t:"Supports a clean, comfortable coat"},{icon:"air",t:"Helps reduce loose surface hair during drying"},{icon:"flag",t:"Creates a chance to flag visible skin changes"}], includesGroup:{title:"Everything Included",items:["Coat assessment before wet work","Pet-safe shampoo selected for the stated need","Thorough rinse and towel/blow dry","Brush-out and light finishing check"]}, productsUsed:["Coat-appropriate shampoo","Temperature-conscious water handling","Sanitised drying tools"], suitableForText:"Suitable for pets 3 months and older.", beforeAppointment:["Tell us about any dermatology treatment, allergy or sensitivity.","Provide water and electricity access.","Avoid bathing immediately after a veterinary procedure unless advised."], duringService:["The groomer checks comfort and coat condition.","The coat is washed, rinsed thoroughly and dried at a pet-tolerant pace."], afterCare:["Keep your pet warm and dry until fully settled.","Avoid muddy play immediately after the appointment.","Seek veterinary guidance for ongoing itching or skin irritation."], expectedResults:["Cleaner-feeling coat","Fresher scent","Brushed-out surface coat"], recommendedFrequency:"Often every 3–6 weeks; coat and skin needs vary.", frequencyTone:"info", comparisonGuidance:{chooseWhen:["Your need matches routine freshness after outdoor play, travel or everyday coat care."],chooseAlt:["Your main need is better served by Full Grooming, Tick & Flea Bath, or service eligibility is not confirmed."]}, commonProblems:["Everyday dirt","Outdoor odour","Light surface shedding","Post-play clean-up"], related:["full-grooming","tick-flea-bath","mini-grooming"], faqs:[{q:"Can you use my medicated shampoo?",a:"Yes, if supplied or approved as directed by your veterinarian."},{q:"Does bathing remove mats?",a:"No. Matted coats require a grooming assessment."},{q:"How often should my pet bathe?",a:"The right interval varies. Over-bathing can be unsuitable for some skin types."},{q:"How do I book?",a:"Choose Book this service, provide pet and location details, then select an available slot."}] },
  { id:"trimming", icon:"content_cut", title:"Trimming", cardDesc:"Precision coat shaping and hygiene-area tidying for a comfortable, maintained finish.", img:CONTACT_IMG.grooming, duration:"45–75 minutes", priceBadge:"₹899", heroPrice:"₹899 per session", trustLine:"Professional groomer • Doorstep grooming", popular:false, showPackages:true, quickFacts:[{label:"Ideal Pet / Age",value:"3 months+"},{label:"Service Type",value:"Doorstep grooming"},{label:"Best For",value:"Face, paws, sanitary areas and coat outlines between full grooms"},{label:"Duration",value:"45–75 minutes"},{label:"Professional Assigned",value:"Professional groomer"},{label:"Location",value:"Doorstep across Delhi NCR"}], whyText:"Choose trimming for face, paws, sanitary areas and coat outlines between full grooms.", benefits:[{icon:"visibility",t:"Keeps face and paws more manageable"},{icon:"self_improvement",t:"Maintains hygiene-area comfort"},{icon:"content_cut",t:"Improves coat shape between full appointments"},{icon:"cleaning_services",t:"Reduces hair obstructing routine care"}], includesGroup:{title:"Everything Included",items:["Style and length discussion","Targeted face, paw, sanitary and outline trimming","Brush-out and symmetry check","After-care note on maintenance"]}, productsUsed:["Sanitised clippers and scissors","Coat-safe combing and sectioning","Low-stress handling"], suitableForText:"Suitable for pets 3 months and older.", beforeAppointment:["Tell us exactly which areas need a tidy and share a reference photo if helpful.","Disclose matting or skin sensitivities."], duringService:["The groomer confirms the agreed finish before trimming.","Target areas are trimmed while preserving comfort and coat condition."], afterCare:["Avoid washing immediately if a clean outline must be maintained.","Comb long facial and paw hair between visits."], expectedResults:["Neater face and paws","Tidier hygiene areas","Maintained coat shape"], recommendedFrequency:"Every 3–6 weeks depending on coat growth and style.", frequencyTone:"info", comparisonGuidance:{chooseWhen:["Your need matches face, paws, sanitary areas and coat outlines between full grooms."],chooseAlt:["Your main need is better served by Full Grooming, Mini Grooming, or service eligibility is not confirmed."]}, commonProblems:["Hair over eyes","Untidy paw feathering","Sanitary-area upkeep","Uneven outline"], related:["full-grooming","mini-grooming","bathing"], faqs:[{q:"Can you remove heavy matting with trimming?",a:"The groomer must assess it first; severe matting may require a different grooming plan."},{q:"Can I choose a specific style?",a:"Yes. Share reference images, but final feasibility depends on coat condition and pet comfort."},{q:"Does trimming include a bath?",a:"No, unless included in the booked grooming service."},{q:"How do I book?",a:"Choose Book this service, provide pet and location details, then select an available slot."}] },
  { id:"tick-flea-bath", icon:"pest_control", title:"Tick & Flea Bath", cardDesc:"A careful hygiene bath that supports parasite-control plans.", img:CONTACT_IMG.grooming, duration:"60–75 minutes", priceBadge:"₹899", heroPrice:"₹899 per session", trustLine:"Professional groomer; veterinary referral when needed", popular:false, showPackages:true, quickFacts:[{label:"Ideal Pet / Age",value:"As assessed at booking"},{label:"Service Type",value:"Doorstep grooming support"},{label:"Best For",value:"Visible parasites or outdoor-exposure hygiene alongside a broader control plan"},{label:"Duration",value:"60–75 minutes"},{label:"Professional Assigned",value:"Professional groomer"},{label:"Location",value:"Doorstep across Delhi NCR"}], whyText:"Choose tick & flea bath for visible parasites or outdoor-exposure hygiene alongside a broader control plan.", benefits:[{icon:"cleaning_services",t:"Removes dirt and some visible parasites from the coat"},{icon:"visibility",t:"Improves coat cleanliness for inspection"},{icon:"home",t:"Supports a home and preventive-control conversation"},{icon:"medical_services",t:"Helps identify skin irritation that needs veterinary review"}], includesGroup:{title:"Everything Included",items:["Coat and skin visual check","Appropriate wash and thorough rinse","Careful drying and comb-through","Owner guidance on environmental cleaning and veterinary follow-up"]}, productsUsed:["Pet-safe wash selected for the booking brief","Fine comb where tolerated","Sanitised towels and equipment"], suitableForText:"Suitability is assessed at booking.", beforeAppointment:["Share your pet's age, species, pregnancy status, medications and any skin condition.","Do not apply new chemical products just before the visit unless directed by a veterinarian.","Wash bedding and vacuum resting areas to support environmental control."], duringService:["The groomer inspects the coat and flags concerning skin changes.","Bathing and comb-through are completed gently; no medical diagnosis is made."], afterCare:["Follow the veterinarian-recommended parasite prevention plan.","Treat the environment and other pets as advised.","Seek veterinary help for lethargy, pale gums, or severe skin inflammation."], expectedResults:["A cleaner, inspected coat","Practical next steps for environmental control","Clear guidance on when veterinary care is needed"], recommendedFrequency:"Not a substitute for preventive parasite control; repeat only as appropriate.", frequencyTone:"warn", comparisonGuidance:{chooseWhen:["Your need matches visible parasites or outdoor-exposure hygiene alongside a broader control plan."],chooseAlt:["Your main need is better served by Veterinary Consultation, Full Grooming, or service eligibility is not confirmed."]}, commonProblems:["Visible ticks or fleas","Itchy or dirty coat","Parasite concern after outdoor exposure","Need for coat inspection"], related:["veterinary-consultation","full-grooming","bathing"], faqs:[{q:"Will one bath solve an infestation?",a:"No. Effective control usually needs veterinarian-approved prevention and environmental management."},{q:"Can you remove every tick?",a:"Visible ticks may require careful handling, but medical assessment is needed when disease risk exists."},{q:"Is it safe for puppies?",a:"Suitability depends on age, health and products. Confirm details at booking."},{q:"How do I book?",a:"Choose Book this service, provide pet and location details, then select an available slot."}] },
  { id:"puppy-training", icon:"school", title:"Puppy Training", cardDesc:"A positive, practical foundation for calm routines and confident learning at home.", img:CONTACT_IMG.training, duration:"45–60 minutes per session", priceBadge:"₹8,999", heroPrice:"₹8,999 for 12 sessions", trustLine:"Qualified pet trainer • Doorstep training", popular:false, showPackages:true, quickFacts:[{label:"Ideal Pet / Age",value:"Puppy stage; age confirmed at booking"},{label:"Service Type",value:"Doorstep training"},{label:"Best For",value:"Building early habits, social confidence and family routines"},{label:"Duration",value:"45–60 minutes per session"},{label:"Professional Assigned",value:"Qualified pet trainer"},{label:"Location",value:"Doorstep across Delhi NCR"}], whyText:"Choose puppy training for building early habits, social confidence and family routines.", benefits:[{icon:"home",t:"Builds predictable home routines"},{icon:"favorite",t:"Supports safe, reward-led learning"},{icon:"psychology",t:"Improves owner confidence and consistency"},{icon:"groups",t:"Encourages calm handling and communication"}], includesGroup:{title:"Everything Included",items:["Puppy and household assessment","Priority goals agreed with the family","Reward-based exercises and demonstration","Simple daily practice plan","Progress note and next-session focus"]}, productsUsed:["Positive reinforcement","Food/toy rewards selected for the pet","Harness, leash and age-appropriate training aids","Short, achievable practice blocks"], suitableForText:"Suitable for the puppy stage; age confirmed at booking.", beforeAppointment:["Share vaccination status, feeding routine and main concerns.","Keep a small portion of your puppy's usual treats ready.","Ensure every key caregiver can attend if possible."], duringService:["The trainer observes current habits and environment.","One or two priority skills are practised with the owner.","The trainer coaches handling, timing and reward delivery."], afterCare:["Practise the agreed exercise in short, calm sessions.","Avoid punishment-based methods that conflict with the plan.","Send progress notes or questions before the next session."], expectedResults:["Clear first commands and routines","A practical owner-led practice plan","Trackable early progress"], recommendedFrequency:"Typically weekly at first, with daily owner practice between sessions.", frequencyTone:"info", comparisonGuidance:{chooseWhen:["Your need matches building early habits, social confidence and family routines."],chooseAlt:["Your main need is better served by Basic & Advanced Obedience, Behaviour Modification, or service eligibility is not confirmed."]}, commonProblems:["Toilet-training routine","Mouthing and jumping","Name response","Settling alone briefly","Leash introduction"], related:["obedience-training","behaviour-modification","pet-walking"], faqs:[{q:"Do you use treats?",a:"Reward choices are tailored to the puppy and family; food is only one option."},{q:"How quickly will my puppy learn?",a:"Progress depends on development, environment and consistent practice."},{q:"Can children join?",a:"Yes, with adult supervision and age-appropriate roles."},{q:"How do I book?",a:"Choose Book this service, provide pet and location details, then select an available slot."}] },
  { id:"obedience-training", icon:"emoji_events", title:"Basic & Advanced Obedience", cardDesc:"Structured, reward-led training that turns everyday cues into reliable shared habits.", img:CONTACT_IMG.training, duration:"45–60 minutes per session", priceBadge:"₹11,999", heroPrice:"₹11,999 for 12 sessions", trustLine:"Qualified pet trainer • Doorstep training", popular:false, showPackages:true, quickFacts:[{label:"Ideal Pet / Age",value:"Usually 4 months+"},{label:"Service Type",value:"Doorstep training"},{label:"Best For",value:"Strengthening home manners, recall foundations and distraction skills"},{label:"Duration",value:"45–60 minutes per session"},{label:"Professional Assigned",value:"Qualified pet trainer"},{label:"Location",value:"Doorstep across Delhi NCR"}], whyText:"Choose basic & advanced obedience for strengthening home manners, recall foundations and distraction skills.", benefits:[{icon:"groups",t:"Improves communication between pet and family"},{icon:"verified_user",t:"Supports safer everyday handling"},{icon:"home",t:"Builds calm, repeatable routines"},{icon:"trending_up",t:"Creates measurable practice milestones"}], includesGroup:{title:"Everything Included",items:["Baseline assessment and goal setting","Cue training tailored to current level","Owner coaching and home practice plan","Progress check and next-step targets"]}, productsUsed:["Positive reinforcement and clear markers","Harness, long line or leash where appropriate","Controlled distraction progression","Written practice tracker"], suitableForText:"Usually suitable from 4 months of age.", beforeAppointment:["Bring your usual rewards and preferred walking equipment.","Tell us the cues your pet already knows and where they struggle.","Keep the session area calm for the first assessment."], duringService:["The trainer identifies the current skill level.","Skills are demonstrated, then practised by the owner.","Difficulty increases only when the pet is ready."], afterCare:["Use the same cue words and reward timing across the household.","Practise briefly and frequently rather than drilling.","Share setbacks; they help refine the plan."], expectedResults:["Defined cues and success criteria","A level-appropriate practice routine","Clear next-step milestones"], recommendedFrequency:"Weekly or fortnightly sessions with daily owner practice.", frequencyTone:"info", comparisonGuidance:{chooseWhen:["Your need matches strengthening home manners, recall foundations and distraction skills."],chooseAlt:["Your main need is better served by Puppy Training, Behaviour Modification, or service eligibility is not confirmed."]}, commonProblems:["Pulling on leash","Poor recall","Jumping on guests","Ignoring familiar cues","Difficulty settling"], related:["puppy-training","behaviour-modification","pet-walking"], faqs:[{q:"What is the difference between basic and advanced?",a:"Basic focuses on foundations and home reliability; advanced adds duration, distance and controlled distractions."},{q:"Will my dog obey everyone?",a:"Consistency across caregivers is essential; the programme teaches the household a shared system."},{q:"Do you guarantee off-leash recall?",a:"No. Safety and reliability are assessed individually; long-line management may remain appropriate."},{q:"How do I book?",a:"Choose Book this service, provide pet and location details, then select an available slot."}] },
  { id:"behaviour-modification", icon:"psychology", title:"Behaviour Modification", cardDesc:"A careful, management-first plan for behaviour concerns that need more than commands.", img:CONTACT_IMG.training, duration:"60–75 minutes initial assessment", priceBadge:"₹14,999", heroPrice:"₹14,999 for 12 sessions", trustLine:"Qualified trainer; veterinary referral when indicated", popular:false, showPackages:true, quickFacts:[{label:"Ideal Pet / Age",value:"All ages; health screening may be advised"},{label:"Service Type",value:"Behaviour support"},{label:"Best For",value:"Fear, reactivity, guarding, distress or recurring behaviour changes"},{label:"Duration",value:"60–75 minutes initial assessment"},{label:"Professional Assigned",value:"Qualified trainer"},{label:"Location",value:"Doorstep across Delhi NCR"}], whyText:"Choose behaviour modification for fear, reactivity, guarding, distress or recurring behaviour changes.", benefits:[{icon:"search",t:"Identifies triggers and patterns"},{icon:"shield",t:"Prioritises safety and management"},{icon:"checklist",t:"Gives the household clear, humane steps"},{icon:"trending_up",t:"Builds gradual confidence at the pet's pace"}], includesGroup:{title:"Everything Included",items:["Detailed history and trigger assessment","Risk and management recommendations","Reward-led behaviour plan","Owner coaching and progress checkpoints","Veterinary referral recommendation when behaviour may have a medical component"]}, productsUsed:["Observation and antecedent tracking","Environmental management","Desensitisation/counterconditioning where appropriate","Positive reinforcement; no aversive tools"], suitableForText:"Suitable for all ages; health screening may be advised.", beforeAppointment:["Share a candid behaviour history, bite incidents and veterinary background.","Do not deliberately expose your pet to triggers before the session.","Arrange secure separation from visitors/other pets if needed."], duringService:["The trainer assesses from a safe distance and does not force exposure.","Immediate management measures are agreed first.","A staged plan is demonstrated only when safe."], afterCare:["Follow management rules consistently.","Do not punish warning signals such as growling.","Contact emergency or veterinary support for sudden severe change."], expectedResults:["A safer household plan","Clear triggers and thresholds","A staged, owner-led intervention plan"], recommendedFrequency:"Initial assessment followed by planned reviews; pace depends on welfare and safety.", frequencyTone:"warn", comparisonGuidance:{chooseWhen:["Your need matches fear, reactivity, guarding, distress or recurring behaviour changes."],chooseAlt:["Your main need is better served by Veterinary Consultation, Basic & Advanced Obedience, or service eligibility is not confirmed."]}, commonProblems:["Fearful reactions","Leash reactivity","Resource guarding","Separation-related distress","Sudden behaviour change"], related:["veterinary-consultation","obedience-training","online-consultation"], faqs:[{q:"Can behaviour be fixed in one session?",a:"Complex behaviour rarely has a one-session solution; the initial visit creates a tailored plan."},{q:"Do you handle aggressive dogs?",a:"Safety is assessed before booking. Severe risk may need a specialist or veterinary behaviour referral."},{q:"Do you use corrective tools?",a:"The protocol is reward-led and management-first; avoid aversive methods."},{q:"How do I book?",a:"Choose Book this service, provide pet and location details, then select an available slot."}] },
  { id:"emergency-care", icon:"emergency", title:"Emergency Care", cardDesc:"Rapid triage and next-step coordination for urgent concerns.", img:CONTACT_IMG.emergency, duration:"Response depends on location and urgency", priceBadge:null, heroPrice:"Price on request", trustLine:"Emergency coordination team • Urgent care coordination", popular:false, showPackages:true, quickFacts:[{label:"Ideal Pet / Age",value:"All pets"},{label:"Service Type",value:"Urgent care coordination"},{label:"Best For",value:"Sudden symptoms or injury requiring urgent guidance and transfer planning"},{label:"Duration",value:"Response depends on location and urgency"},{label:"Professional Assigned",value:"Emergency coordination team"},{label:"Location",value:"Doorstep across Delhi NCR"}], whyText:"Choose emergency care for sudden symptoms or injury requiring urgent guidance and transfer planning.", benefits:[{icon:"flag",t:"Helps owners identify an urgent next step"},{icon:"support_agent",t:"Supports calm, clear handover information"},{icon:"bolt",t:"Prioritises rapid referral over delay"},{icon:"health_and_safety",t:"Provides practical safety guidance while help is arranged"}], includesGroup:{title:"Everything Included",items:["Urgency triage based on information provided","Immediate next-step guidance","Veterinary or hospital referral/transfer coordination where available","Owner handover information checklist"]}, productsUsed:["Triage protocol","Emergency contact and location confirmation","Referral/transfer coordination","No diagnosis or treatment promise before professional assessment"], suitableForText:"Suitable for all pets.", beforeAppointment:["Keep emergency contacts, address and pet medical history accessible.","For a life-threatening event, call local emergency services or the nearest emergency veterinary hospital immediately."], duringService:["The coordinator gathers essential details: symptoms, timing, location and safety risks.","You are directed to the fastest appropriate emergency pathway.","Keep the pet safe, warm and minimally handled unless instructed otherwise."], afterCare:["Follow the receiving clinician's advice.","Share discharge notes for continuity when appropriate.","Arrange follow-up care only after the acute event is stabilised."], expectedResults:["A clear urgent pathway","More organised emergency handover","Appropriate escalation guidance"], recommendedFrequency:"Use only for urgent concerns; it is not a replacement for routine veterinary care.", frequencyTone:"warn", comparisonGuidance:{chooseWhen:["Your need matches sudden symptoms or injury requiring urgent guidance and transfer planning."],chooseAlt:["Your main need is better served by Veterinary Consultation, Online Consultation, or service eligibility is not confirmed."]}, commonProblems:["Breathing difficulty","Collapse or unresponsiveness","Major bleeding or trauma","Suspected poisoning","Seizure or sudden severe pain"], related:["veterinary-consultation","online-consultation"], faqs:[{q:"What counts as an emergency?",a:"Breathing difficulty, collapse, uncontrolled bleeding, suspected poisoning, seizure, major trauma and sudden severe illness require urgent veterinary assessment."},{q:"Can this service treat my pet at home?",a:"Availability varies. The priority is safe triage and rapid professional care or transfer."},{q:"What should I do while waiting?",a:"Follow the live guidance, keep your pet safe and avoid food, medicines or handling unless instructed."},{q:"How do I book?",a:"Choose Book this service, provide pet and location details, then select an available slot."}] },
  { id:"online-consultation", icon:"video_call", title:"Online Consultation", cardDesc:"Convenient video guidance for appropriate follow-ups, routine questions and care-plan clarification.", img:CONTACT_IMG.online, duration:"20–30 minutes", priceBadge:null, heroPrice:"Price on request", trustLine:"Registered veterinarian where provided • Video consultation", popular:false, showPackages:true, quickFacts:[{label:"Ideal Pet / Age",value:"All ages when clinically appropriate"},{label:"Service Type",value:"Video consultation"},{label:"Best For",value:"Non-urgent questions, follow-ups and deciding whether an in-person visit is needed"},{label:"Duration",value:"20–30 minutes"},{label:"Professional Assigned",value:"Registered veterinarian"},{label:"Location",value:"Video consultation"}], whyText:"Choose online consultation for non-urgent questions, follow-ups and deciding whether an in-person visit is needed.", benefits:[{icon:"video_call",t:"Convenient access for suitable concerns"},{icon:"description",t:"Useful review of records, photos and ongoing care plans"},{icon:"route",t:"Helps decide when in-person examination is needed"},{icon:"directions_car_filled",t:"Reduces avoidable travel for non-urgent questions"}], includesGroup:{title:"Everything Included",items:["Pre-call history review","Video discussion and visual observation where possible","Clear next-step, monitoring or referral guidance","Written summary where offered"]}, productsUsed:["Secure video call workflow","Photo/video review submitted before appointment","Record-led clinical discussion","In-person referral threshold"], suitableForText:"Suitable for all ages when clinically appropriate.", beforeAppointment:["Send clear photos/videos and a short timeline of the concern.","Keep records, medicine labels and your questions ready.","Use a quiet location with reliable connection and good lighting."], duringService:["The clinician confirms what can and cannot be assessed by video.","Symptoms, history and available visuals are reviewed.","You agree next steps and clear escalation triggers."], afterCare:["Follow the written plan and monitoring guidance.","Arrange in-person care immediately if red flags arise or the clinician requests examination."], expectedResults:["A clearer decision path","Documented monitoring steps","Appropriate in-person referral when needed"], recommendedFrequency:"As advised; suitable for follow-ups and non-urgent guidance, not emergencies.", frequencyTone:"warn", comparisonGuidance:{chooseWhen:["Your need matches non-urgent questions, follow-ups and deciding whether an in-person visit is needed."],chooseAlt:["Your main need is better served by Veterinary Consultation, Emergency Care, or service eligibility is not confirmed."]}, commonProblems:["Follow-up questions","Reviewing a stable, previously assessed issue","Medication clarification","Deciding whether an in-person visit is needed"], related:["veterinary-consultation","emergency-care","vaccination"], faqs:[{q:"Can a vet diagnose everything online?",a:"No. Video has limits; an in-person examination, tests or emergency care may be required."},{q:"Is this for emergencies?",a:"No. Use emergency services or urgent veterinary care for severe or rapidly worsening symptoms."},{q:"What should I send before the call?",a:"A brief timeline, current medicines, records and clear photos or short videos when relevant."},{q:"How do I book?",a:"Choose Book this service, provide pet and location details, then select an available slot."}] },
  { id:"boarding", icon:"cottage", title:"Boarding", cardDesc:"A structured, welfare-first stay with routine, monitoring and clear owner updates.", img:CONTACT_IMG.boarding, duration:"Overnight / multi-day", priceBadge:null, heroPrice:"Price on request", trustLine:"Trained care team • Pet boarding", popular:false, showPackages:true, quickFacts:[{label:"Ideal Pet / Age",value:"Suitable pets after screening"},{label:"Service Type",value:"Pet boarding"},{label:"Best For",value:"Planned travel, short stays and routine-led care away from home"},{label:"Duration",value:"Overnight / multi-day"},{label:"Professional Assigned",value:"Trained care team"},{label:"Location",value:"Doorstep across Delhi NCR"}], whyText:"Choose boarding for planned travel, short stays and routine-led care away from home.", benefits:[{icon:"event_repeat",t:"Maintains a predictable daily routine"},{icon:"restaurant",t:"Provides supervised rest, feeding and enrichment"},{icon:"forum",t:"Creates a clear handover and update process"},{icon:"emergency",t:"Supports early escalation if a concern is noticed"}], includesGroup:{title:"Everything Included",items:["Pre-stay screening and care-profile review","Assigned accommodation based on suitability","Feeding per written instructions","Scheduled rest, hygiene and enrichment","Owner update plan and check-out handover"]}, productsUsed:["Sanitised accommodation and bedding protocol","Controlled introduction and separation plans","Daily welfare observations","Medication only per written instruction"], suitableForText:"Suitable for pets after screening.", beforeAppointment:["Complete the care profile, vaccination requirements and emergency contacts.","Bring labelled food, medicines and comfort items as accepted.","Disclose behaviour, health, feeding and separation concerns honestly."], duringService:["The team follows the agreed feeding, rest and activity plan.","Pets are monitored and separated or socialised only when suitable.","Owners receive updates at the agreed cadence."], afterCare:["Return gradually to the home routine; some pets need a quiet evening.","Review feeding, stool and energy over the first day.","Contact us promptly with any handover question."], expectedResults:["A documented, routine-led stay","Clear update trail","Handover notes at collection"], recommendedFrequency:"As needed; trial day care or a short stay is recommended for first-time boarders.", frequencyTone:"info", comparisonGuidance:{chooseWhen:["Your need matches planned travel, short stays and routine-led care away from home."],chooseAlt:["Your main need is better served by Pet Walking, Veterinary Consultation, or service eligibility is not confirmed."]}, commonProblems:["Travel cover","Owner absence","Need for monitored routine","Concern about feeding and activity continuity"], related:["pet-walking","veterinary-consultation","vaccination"], faqs:[{q:"Can pets share accommodation?",a:"Only when appropriate, safe and agreed; individual needs come first."},{q:"What happens if my pet becomes unwell?",a:"The care team follows the emergency-contact and veterinary escalation plan agreed at check-in."},{q:"Can I bring my pet's food?",a:"Yes, subject to the boarding policy; labelled instructions are essential."},{q:"How do I book?",a:"Choose Book this service, provide pet and location details, then select an available slot."}] },
  { id:"pet-walking", icon:"directions_walk", title:"Pet Walking", cardDesc:"Reliable, safety-conscious walks shaped around your dog's routine, confidence and energy.", img:CONTACT_IMG.training, duration:"30 / 45 / 60 minutes", priceBadge:null, heroPrice:"Price on request", trustLine:"Trained walker • Doorstep walking", popular:false, showPackages:true, quickFacts:[{label:"Ideal Pet / Age",value:"Dogs suited to walking assessment"},{label:"Service Type",value:"Doorstep walking"},{label:"Best For",value:"Daily exercise, routine support and managed outdoor enrichment"},{label:"Duration",value:"30 / 45 / 60 minutes"},{label:"Professional Assigned",value:"Trained walker"},{label:"Location",value:"Doorstep across Delhi NCR"}], whyText:"Choose pet walking for daily exercise, routine support and managed outdoor enrichment.", benefits:[{icon:"directions_walk",t:"Supports healthy daily movement"},{icon:"psychology",t:"Provides mental enrichment through safe exploration"},{icon:"schedule",t:"Maintains a predictable routine during busy days"},{icon:"description",t:"Gives owners a clear post-walk update"}], includesGroup:{title:"Everything Included",items:["Meet-and-greet and walking assessment","Route and equipment check","Leashed walk matched to the agreed duration","Water/rest adjustments as needed","Post-walk update with route/activity note"]}, productsUsed:["Secure harness/collar and lead check","Weather-aware route planning","No off-leash release unless explicitly approved and safe","Waste disposal and hydration protocol"], suitableForText:"Suitable for dogs assessed as suited to walking.", beforeAppointment:["Share access instructions, triggers, medical needs and preferred equipment.","Ensure collar/harness fits securely and tags are current.","Tell us whether your dog may interact with people or dogs."], duringService:["The walker completes a safety check before leaving.","Pace and route are adjusted for weather, confidence and energy.","The dog remains managed according to the agreed handling plan."], afterCare:["Water is offered and the dog is settled as instructed.","You receive a concise update and any observation worth noting."], expectedResults:["Completed routine exercise","A documented walk update","A calmer transition back home"], recommendedFrequency:"Daily or several times weekly according to routine, age and health.", frequencyTone:"info", comparisonGuidance:{chooseWhen:["Your need matches daily exercise, routine support and managed outdoor enrichment."],chooseAlt:["Your main need is better served by Puppy Training, Basic & Advanced Obedience, or service eligibility is not confirmed."]}, commonProblems:["Busy workday schedule","Missed daytime break","Need for regular activity","Boredom from an inconsistent routine"], related:["puppy-training","obedience-training","boarding"], faqs:[{q:"Will my dog be walked with others?",a:"Only if group walking is offered, safe and explicitly agreed; individual needs guide the plan."},{q:"What happens in bad weather?",a:"The safety-first weather policy may shorten, reschedule or adapt the activity."},{q:"Do you walk reactive dogs?",a:"Tell us before booking. Suitability and handling plan must be assessed."},{q:"How do I book?",a:"Choose Book this service, provide pet and location details, then select an available slot."}] },
];

const PACKAGES = [
  { id:"adult-ultra", name:"Adult Dog — Ultra Premium Bundle", unit:"per year, all-inclusive", price:"₹20,999", popular:true, suitableFor:"Adult dogs, 1–7 years, any breed", groups:[{title:"Training",items:["Basic + Advanced Obedience Training — 12 sessions","Commands: Sit, Stay, Come, Heel, Fetch, Crate & more"]},{title:"Grooming",items:["Full Grooming — 8 sessions across the year","Bathing, trimming, nail clipping, dematting & de-shedding","Ear, eye, paw & dental cleaning with perfume finish"]},{title:"Vaccination",items:["Adult Dog Vaccination Package with Kennel Cough","Anti Rabies, DHPPIL, Canine Corona & Deworming","US-based vaccination, administered by our vet team"]}], savings:{rows:[{label:"Basic + Advanced Obedience Training",cost:11999},{label:"Full Grooming × 8 sessions",cost:14392},{label:"Adult Dog Vaccination Package",cost:3999}],individualTotal:30390,packagePrice:20999}, tags:["obedience-training","full-grooming","mini-grooming","bathing","trimming","tick-flea-bath","vaccination"] },
  { id:"adult-premium", name:"Adult Dog — Premium Bundle", unit:"per year, all-inclusive", price:"₹18,999", suitableFor:"Adult dogs, 1–7 years, any breed", groups:[{title:"Training",items:["Basic Obedience Training","House etiquettes, socialization & core commands"]},{title:"Grooming",items:["Full Grooming — 8 sessions across the year","Bathing, trimming, nail clipping, dematting & de-shedding","Ear, eye, paw & dental cleaning with perfume finish"]},{title:"Vaccination",items:["Adult Dog Vaccination Package with Kennel Cough","Anti Rabies, DHPPIL, Canine Corona & Deworming","US-based vaccination, administered by our vet team"]}], savings:null, savingsNote:"Grooming (8 sessions) and Vaccination alone total ₹18,391 — and Basic Obedience Training is bundled in on top.", tags:["obedience-training","full-grooming","mini-grooming","bathing","trimming","tick-flea-bath","vaccination","veterinary-consultation"] },
  { id:"puppy-ultra", name:"Puppy — Ultra Premium Bundle", unit:"3-month care plan", price:"₹36,999", suitableFor:"Puppies, first 3 months of a structured care plan", groups:[{title:"Training",items:["3-Month Basic + Advanced Obedience Training","Pee-poop, socialization, leash walking & full command set"]},{title:"Grooming",items:["Full Grooming — 6 sessions across the plan"]},{title:"Vaccination",items:["Complete Puppy Vaccination Package — 8 shots","Puppy DP, DHPPIL, Canine Corona, Anti Rabies, Kennel Cough & boosters","US-based vaccination, administered by our vet team"]}], savings:null, savingsNote:"Bundles a full 3-month training programme, 6 grooming sessions and the complete puppy vaccination series into one plan.", tags:["puppy-training","full-grooming","mini-grooming","bathing","trimming","tick-flea-bath","vaccination"] },
  { id:"puppy-premium", name:"Puppy — Premium Bundle", unit:"1-month care plan", price:"₹20,999", suitableFor:"Puppies starting their first structured care plan", groups:[{title:"Training",items:["1-Month Basic Obedience Training","Pee-poop training, name recognition & house etiquettes"]},{title:"Grooming",items:["Full Grooming — 6 sessions across the plan"]},{title:"Vaccination",items:["Complete Puppy Vaccination Package — 8 shots","Puppy DP, DHPPIL, Canine Corona, Anti Rabies, Kennel Cough & boosters","US-based vaccination, administered by our vet team"]}], savings:null, savingsNote:"A shorter, lighter entry point into structured puppy care across training, grooming and vaccination.", tags:["puppy-training","full-grooming","mini-grooming","bathing","trimming","tick-flea-bath","vaccination","veterinary-consultation"] },
  { id:"cat-yearly", name:"Cat Yearly Bundle", unit:"per year, all-inclusive", price:"₹7,799", suitableFor:"Cats, 1 year & above", groups:[{title:"Grooming",items:["Full Grooming — 6 sessions across the year","Bathing, trimming, nail clipping, dematting & de-shedding","Ear, eye, paw & dental cleaning with perfume finish"]},{title:"Vaccination",items:["Cat Vaccination Package","Tricat, Anti Rabies & Deworming","US-based vaccination, administered by our vet team"]}], savings:null, savingsNote:"Combines a full year of grooming with core vaccination coverage for cats in a single plan.", tags:["full-grooming","mini-grooming","bathing","trimming","tick-flea-bath","vaccination"] },
];

const EXPERTS = [
  { role:"Lead Veterinarian", name:"Dr. Veterinarian", cred:"BVSc & AH · 8+ yrs clinical experience", desc:"Oversees every doorstep consultation, diagnostic case and vaccination protocol across our clinics.", tags:["Small Animal Medicine","Vaccination Protocols","Emergency Care"], icon:"medical_services", img:"https://images.unsplash.com/photo-1559839914-17aae19cec71?q=80&w=800&auto=format&fit=crop" },
  { role:"Certified Trainer", name:"Trainer", cred:"Certified Canine Behaviourist · 6+ yrs", desc:"Leads our obedience, puppy and behavioural-modification programmes using positive reinforcement.", tags:["Obedience Training","Behaviour Modification","Puppy Programmes"], icon:"school", img:"https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=800&auto=format&fit=crop" },
  { role:"Senior Groomer", name:"Groomer", cred:"Professional Pet Groomer · 5+ yrs", desc:"Specialises in full-service grooming, dematting and gentle handling for anxious pets.", tags:["Full Grooming","Breed-Specific Styling","Sensitive Skin Care"], icon:"content_cut", img:"https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop" },
];

const HOW_IT_WORKS = [
  { icon:"event_available", t:"Book", d:"Choose a service and pick a slot online or on WhatsApp." },
  { icon:"verified", t:"Confirm", d:"We confirm your slot and match the right professional." },
  { icon:"home", t:"Visit", d:"Our vet, trainer or groomer arrives at your door, fully equipped." },
  { icon:"pets", t:"Service", d:"Your pet is cared for calmly, in a familiar environment." },
  { icon:"star_rate", t:"Feedback", d:"We follow up and log notes for your pet's next visit." },
];

const WHYUS_FULL = [
  { icon:"verified_user", t:"Certified Team" },
  { icon:"home", t:"Doorstep Service" },
  { icon:"spa", t:"Premium Products" },
  { icon:"emergency", t:"Emergency Support" },
  { icon:"school", t:"Experienced Trainers" },
  { icon:"medical_services", t:"Veterinary Experts" },
  { icon:"receipt_long", t:"Transparent Pricing" },
  { icon:"support_agent", t:"Customer Support" },
];

const GALLERY_IMAGES = [
  CONTACT_IMG.vet, CONTACT_IMG.grooming, CONTACT_IMG.training, CONTACT_IMG.vaccination,
  CONTACT_IMG.boarding, CONTACT_IMG.emergency, CONTACT_IMG.online,
];

const PAGE_FAQS = [
  { q:"What areas do you currently serve?", a:"We serve all of Delhi NCR — Delhi, Gurgaon, Noida, Ghaziabad and Faridabad — entirely at your doorstep." },
  { q:"How do I choose between booking a single service and a yearly bundle?", a:"If you expect to need grooming, training and vaccination across the year, a bundle works out cheaper. For a one-off need, book the individual service directly." },
  { q:"Is doorstep care safe for anxious or reactive pets?", a:"Yes — our vets, trainers and groomers are experienced with nervous and reactive pets, and being in a familiar home environment usually reduces stress." },
  { q:"How do I pay for a booking?", a:"Payment options are shared when you confirm your booking on WhatsApp or by phone — our team will walk you through it." },
  { q:"Can I get a same-day appointment?", a:"Availability depends on your area and the service, but many bookings can be scheduled same-day. Emergency Care is available 24/7." },
];

const FAQ_SHARED = [
  { q:"How do doorstep visits work?", a:"Our certified professionals arrive at your home fully equipped — clinical-grade kits for vets, and professional-grade tools for groomers and trainers — so your pet is cared for in a familiar, stress-free environment." },
  { q:"Can I reschedule a booking?", a:"Yes. Sessions can be rescheduled up to 24 hours in advance at no extra cost." },
  { q:"What cities do you cover?", a:"We currently serve all of Delhi NCR — Delhi, Gurgaon, Noida, Ghaziabad and Faridabad." },
];

function fmtINR(n) { return "₹" + n.toLocaleString("en-IN"); }
function findService(id) { return SERVICES.find(s => s.id === id); }

export default function ServicesPage() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelService, setPanelService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [openSubItem, setOpenSubItem] = useState({});
  const [openPkg, setOpenPkg] = useState({});
  const [compareTab, setCompareTab] = useState("training");
  const [baPos, setBaPos] = useState(50);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [catNavShow, setCatNavShow] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [calcCount, setCalcCount] = useState(4);
  const panelRef = useRef(null);
  const baDragging = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".services-hero");
      if (hero) {
        setCatNavShow(window.scrollY > hero.offsetHeight * 0.6);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".svc-card");
    cards.forEach((el, i) => {
      setTimeout(() => el.classList.add("reveal"), i * 60);
    });
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        if (lightboxOpen) setLightboxOpen(false);
        else if (panelOpen) setPanelOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, panelOpen]);

  const openPanel = useCallback((id) => {
    const svc = findService(id);
    if (svc) { setPanelService(svc); setPanelOpen(true); document.body.style.overflow = "hidden"; }
  }, []);

  const closePanel = useCallback(() => {
    setPanelOpen(false); document.body.style.overflow = "";
  }, []);

  const handleBook = useCallback((id) => {
    const svc = findService(id);
    const label = svc ? svc.title : "a service";
    const msg = encodeURIComponent(`Hi, I'd like to book ${label} on The Paws Friend.`);
    window.open(`${WHATSAPP}?text=${msg}`, "_blank");
  }, []);

  const handleBaMove = useCallback((clientX) => {
    const slider = document.getElementById("baSlider");
    if (!slider) return;
    const rect = slider.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(4, Math.min(96, pct));
    setBaPos(pct);
  }, []);

  const toggleFaq = useCallback((key) => {
    setOpenFaq(prev => prev === key ? null : key);
  }, []);

  const toggleSubItem = useCallback((svcId, idx) => {
    setOpenSubItem(prev => {
      const key = `${svcId}-${idx}`;
      return { ...prev, [key]: !prev[key] };
    });
  }, []);

  const togglePkg = useCallback((pkgId) => {
    setOpenPkg(prev => ({ ...prev, [pkgId]: !prev[pkgId] }));
  }, []);

  const renderCompareTable = () => {
    const TRAINING_IDS = ["puppy-training","obedience-training","behaviour-modification"];
    const GROOMING_IDS = ["full-grooming","mini-grooming","bathing","trimming","tick-flea-bath"];

    if (compareTab === "training") {
      const rows = TRAINING_IDS.map(findService).filter(Boolean).map(svc => ({
        id: svc.id, name: svc.title, price: svc.priceBadge || "Price on request",
        idealAge: (svc.quickFacts.find(f => f.label === "Ideal Pet / Age") || {}).value || "—",
        bestFor: (svc.quickFacts.find(f => f.label === "Best For") || {}).value || "—",
      }));
      return (
        <table className="compare-table">
          <thead><tr><th>Programme</th><th>Price</th><th>Ideal Age</th><th>Best For</th><th></th></tr></thead>
          <tbody>{rows.map(r => (
            <tr key={r.id}><td className="name-cell">{r.name}</td><td className="price-cell">{r.price}</td><td>{r.idealAge}</td><td>{r.bestFor}</td>
            <td className="cta-cell"><button className="btn btn-primary" onClick={() => openPanel(r.id)}>View</button></td></tr>
          ))}</tbody>
        </table>
      );
    }
    if (compareTab === "grooming") {
      const rows = GROOMING_IDS.map(findService).filter(Boolean).map(svc => ({
        id: svc.id, name: svc.title, price: svc.priceBadge || "Price on request",
        idealAge: (svc.quickFacts.find(f => f.label === "Ideal Pet / Age") || {}).value || "—",
        bestFor: (svc.quickFacts.find(f => f.label === "Best For") || {}).value || "—",
      }));
      return (
        <table className="compare-table">
          <thead><tr><th>Service</th><th>Price</th><th>Ideal Age</th><th>Best For</th><th></th></tr></thead>
          <tbody>{rows.map(r => (
            <tr key={r.id}><td className="name-cell">{r.name}</td><td className="price-cell">{r.price}</td><td>{r.idealAge}</td><td>{r.bestFor}</td>
            <td className="cta-cell"><button className="btn btn-primary" onClick={() => openPanel(r.id)}>View</button></td></tr>
          ))}</tbody>
        </table>
      );
    }
    if (compareTab === "vaccination") {
      const svc = findService("vaccination");
      const rows = (svc?.subItems || []).map(it => ({
        name: it.name, price: it.price, unit: it.unit,
        idealAge: it.fields.find(f => f.label === "Ideal Age")?.value || "—",
        coverage: it.included.length + " items covered",
      }));
      return (
        <table className="compare-table">
          <thead><tr><th>Package</th><th>Price</th><th>Type</th><th>Ideal Age</th><th>Coverage</th><th></th></tr></thead>
          <tbody>{rows.map((r, i) => (
            <tr key={i}><td className="name-cell">{r.name}</td><td className="price-cell">{r.price}</td><td>{r.unit}</td><td>{r.idealAge}</td><td>{r.coverage}</td>
            <td className="cta-cell"><button className="btn btn-primary" onClick={() => openPanel("vaccination")}>View</button></td></tr>
          ))}</tbody>
        </table>
      );
    }
    if (compareTab === "bundles") {
      const rows = PACKAGES.map(p => ({
        name: p.name, price: p.price, unit: p.unit, suitableFor: p.suitableFor,
        training: p.groups.some(g => g.title === "Training"),
        grooming: p.groups.some(g => g.title === "Grooming"),
        vaccination: p.groups.some(g => g.title === "Vaccination"),
        savings: p.savings ? `${fmtINR(p.savings.individualTotal - p.savings.packagePrice)} saved` : "Bundle value",
      }));
      return (
        <table className="compare-table">
          <thead><tr><th>Bundle</th><th>Price</th><th>Unit</th><th>Suitable For</th><th>Training</th><th>Grooming</th><th>Vaccination</th><th>Value</th></tr></thead>
          <tbody>{rows.map((r, i) => (
            <tr key={i}><td className="name-cell">{r.name}</td><td className="price-cell">{r.price}</td><td>{r.unit}</td><td>{r.suitableFor}</td>
            <td>{r.training ? <span className="material-symbols-outlined check">check_circle</span> : <span className="dash">—</span>}</td>
            <td>{r.grooming ? <span className="material-symbols-outlined check">check_circle</span> : <span className="dash">—</span>}</td>
            <td>{r.vaccination ? <span className="material-symbols-outlined check">check_circle</span> : <span className="dash">—</span>}</td>
            <td>{r.savings}</td></tr>
          ))}</tbody>
        </table>
      );
    }
    return null;
  };

  const renderPanelContent = () => {
    if (!panelService) return null;
    const svc = panelService;
    const relevantPkgs = PACKAGES.filter(p => p.tags.includes(svc.id));

    return (
      <>
        <button className="panel-close" onClick={closePanel} aria-label="Close panel"><span className="material-symbols-outlined">close</span></button>
        <div className="mobile-drag-handle"></div>
        <div className="panel-scroll">
          <div className="panel-hero">
            <img src={svc.img} alt={svc.title} />
            <div className="panel-hero-tag">
              <div className="doorstep-badge"><span className="material-symbols-outlined">home</span> Doorstep Service</div>
              <h2>{svc.title}</h2>
              <p>{svc.cardDesc}</p>
              <div style={{display:"flex",gap:8,flexWrap:"wrap",fontSize:12.5,opacity:.95,marginTop:8}}>
                <span>{svc.heroPrice}</span><span>·</span><span>{svc.duration}</span><span>·</span><span>{svc.trustLine}</span>
              </div>
              <div className="btn-row" style={{marginTop:14,gap:10}}>
                <button className="btn btn-primary" onClick={() => handleBook(svc.id)}><span className="material-symbols-outlined">calendar_today</span> Book This Service</button>
                <button className="btn btn-secondary" onClick={() => window.location.href = `tel:+919211338489`}><span className="material-symbols-outlined">call</span> Talk To Our Team</button>
              </div>
            </div>
          </div>
          <div className="panel-body">
            {/* Quick Facts */}
            <div className="p-section" style={{paddingTop:22}}>
              <h3><span className="material-symbols-outlined">checklist</span> Quick Facts</h3>
              <div className="overview-grid">
                {svc.quickFacts.map((o, i) => <div className="overview-item" key={i}><div className="label">{o.label}</div><div className="value">{o.value}</div></div>)}
              </div>
            </div>

            {/* Why This Service */}
            <div className="p-section">
              <h3><span className="material-symbols-outlined">info</span> Why This Service</h3>
              <p className="desc" style={{margin:0}}>{svc.whyText}</p>
            </div>

            {/* Benefits */}
            <div className="p-section">
              <h3><span className="material-symbols-outlined">favorite</span> Health &amp; Wellbeing Benefits</h3>
              <div className="why-grid">
                {svc.benefits.map((w, i) => <div className="why-card" key={i}><span className="material-symbols-outlined">{w.icon}</span><div><div className="t">{w.t}</div></div></div>)}
              </div>
            </div>

            {/* Includes */}
            <div className="p-section">
              <h3><span className="material-symbols-outlined">checklist</span> Everything Included</h3>
              <div className="include-group">
                <div className="include-group-title">{svc.includesGroup.title}</div>
                <div className="include-grid">
                  {svc.includesGroup.items.map((item, i) => <div className="include-chip" key={i}><span className="material-symbols-outlined">check_circle</span>{item}</div>)}
                </div>
              </div>
            </div>

            {/* Sub Items (Vaccination Packages) */}
            {svc.subItems && (
              <div className="p-section">
                <h3><span className="material-symbols-outlined">list_alt</span> Vaccination Packages</h3>
                <div className="subitem-list">
                  {svc.subItems.map((item, idx) => {
                    const isOpen = openSubItem[`${svc.id}-${idx}`];
                    return (
                      <div className={`subitem ${isOpen ? "open" : ""}`} key={idx}>
                        <button className="subitem-head" onClick={() => toggleSubItem(svc.id, idx)}>
                          <div>
                            <div className="si-title">{item.name}</div>
                            <div className="si-unit">{item.unit}</div>
                          </div>
                          <div className="si-right">
                            <div className="si-price">{item.price}</div>
                            <span className="material-symbols-outlined chev">expand_more</span>
                          </div>
                        </button>
                        <div className="subitem-panel">
                          <div className="subitem-panel-inner">
                            <div className="si-meta-row">
                              {item.fields.map((f, fi) => <div className="si-meta" key={fi}><b>{f.label}:</b> {f.value}</div>)}
                            </div>
                            <div className="si-block"><div className="sb-label">Overview</div><p>{item.overview}</p></div>
                            <div className="si-block"><div className="sb-label">Everything Included</div>
                              <ul>{item.included.map((inc, ii) => <li key={ii}>{inc}</li>)}</ul>
                            </div>
                            <div className="si-actions">
                              <button className="btn btn-primary" onClick={() => handleBook(svc.id)}><span className="material-symbols-outlined">calendar_today</span> Book Now</button>
                              <button className="btn btn-soft-green" onClick={() => window.open(WHATSAPP, "_blank")}><span className="material-symbols-outlined">chat</span> Talk to an Expert</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Individual Services */}
            {svc.individualServices && (
              <div className="p-section">
                <h3><span className="material-symbols-outlined">price_change</span> {svc.individualServices.title}</h3>
                <div className="include-grid">
                  {svc.individualServices.items.map((item, i) => (
                    <div className="include-chip" key={i}><span className="material-symbols-outlined">vaccines</span>{item.name} — <b style={{marginLeft:4,color:"var(--orange-dark)"}}>{item.price}</b></div>
                  ))}
                </div>
                <p className="desc" style={{marginTop:12}}>{svc.individualServices.note}</p>
              </div>
            )}

            {/* Journey */}
            <div className="p-section">
              <h3><span className="material-symbols-outlined">route</span> Appointment Journey</h3>
              <div className="timeline">
                {["1. Book","2. Confirm","3. Prepare","4. Deliver","5. Complete","6. Follow Up"].map((label, i) => (
                  <div className="timeline-item" key={i}><div className="timeline-dot"></div><div className="t-label">{label}</div><div className="t-detail">{["Select the service; enter pet details, preferred slot and any special notes.","The team confirms suitability, location and requirements.","Use the service-specific preparation checklist below.","The assigned professional follows the agreed plan.","Review outcome, next steps and after-care before the visit closes.","Use the stated support path and book the recommended next visit if needed."][i]}</div></div>
                ))}
              </div>
            </div>

            {/* Products Used */}
            <div className="p-section">
              <h3><span className="material-symbols-outlined">inventory_2</span> Products / Methods Used</h3>
              <div className="tag-row">
                {svc.productsUsed.map((t, i) => <div className="tag-chip" key={i}>{t}</div>)}
              </div>
            </div>

            {/* Suitable For */}
            <div className="p-section">
              <h3><span className="material-symbols-outlined">diversity_3</span> Suitable For</h3>
              <p className="desc" style={{margin:0}}>{svc.suitableForText}</p>
            </div>

            {/* Before / During / After */}
            <div className="p-section">
              <h3><span className="material-symbols-outlined">checklist</span> Before Your Appointment</h3>
              <div className="include-grid">{svc.beforeAppointment.map((item, i) => <div className="include-chip" key={i}><span className="material-symbols-outlined">check_circle</span>{item}</div>)}</div>
            </div>
            <div className="p-section">
              <h3><span className="material-symbols-outlined">task_alt</span> During The Service</h3>
              <div className="include-grid">{svc.duringService.map((item, i) => <div className="include-chip" key={i}><span className="material-symbols-outlined">check_circle</span>{item}</div>)}</div>
            </div>
            <div className="p-section">
              <h3><span className="material-symbols-outlined">self_improvement</span> After Care</h3>
              <div className="include-grid">{svc.afterCare.map((item, i) => <div className="include-chip" key={i}><span className="material-symbols-outlined">check_circle</span>{item}</div>)}</div>
            </div>

            {/* Expected Results */}
            <div className="p-section">
              <h3><span className="material-symbols-outlined">flag</span> Expected Results</h3>
              <div className="benefit-row">{svc.expectedResults.map((b, i) => <div className="benefit-chip" key={i}><span className="material-symbols-outlined">check_circle</span>{b}</div>)}</div>
            </div>

            {/* Recommended Frequency */}
            <div className="p-section">
              <h3><span className="material-symbols-outlined">event_repeat</span> Recommended Frequency</h3>
              <div className={`info-callout ${svc.frequencyTone === "warn" ? "warn" : ""}`}>
                <span className="material-symbols-outlined">event_repeat</span>
                <div>
                  <div className="ic-title">Recommended Cadence</div>
                  <p className="ic-text">{svc.recommendedFrequency}</p>
                </div>
              </div>
            </div>

            {/* Comparison Guidance */}
            <div className="p-section">
              <h3><span className="material-symbols-outlined">compare_arrows</span> Is This The Right Service?</h3>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:20}}>
                <div className="include-group">
                  <div className="include-group-title">Choose This Service When…</div>
                  <div className="include-grid">{svc.comparisonGuidance.chooseWhen.map((item, i) => <div className="include-chip" key={i}><span className="material-symbols-outlined">check_circle</span>{item}</div>)}</div>
                </div>
                <div className="include-group">
                  <div className="include-group-title">Choose An Alternative When…</div>
                  <div className="include-grid">{svc.comparisonGuidance.chooseAlt.map((item, i) => <div className="include-chip" key={i}><span className="material-symbols-outlined">swap_horiz</span>{item}</div>)}</div>
                </div>
              </div>
            </div>

            {/* Common Problems */}
            <div className="p-section">
              <h3><span className="material-symbols-outlined">troubleshoot</span> Common Problems Solved</h3>
              <div className="tag-row">{svc.commonProblems.map((t, i) => <div className="tag-chip" key={i}>{t}</div>)}</div>
            </div>

            {/* Related Services */}
            {svc.related && svc.related.length > 0 && (
              <div className="p-section">
                <h3><span className="material-symbols-outlined">explore</span> Related Services</h3>
                <div className="related-grid">
                  {svc.related.map(relId => {
                    const rel = findService(relId);
                    if (!rel) return null;
                    return (
                      <div className="related-card" key={relId} onClick={() => openPanel(relId)}>
                        <span className="material-symbols-outlined">{rel.icon}</span>
                        <div className="rc-name">{rel.title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Packages */}
            {relevantPkgs.length > 0 && (
              <div className="p-section">
                <h3><span className="material-symbols-outlined">redeem</span> Recommended Packages</h3>
                <p className="desc">Yearly &amp; multi-month care plans that bundle this service with related care.</p>
                <div className="pkg-mini-list">
                  {relevantPkgs.map(pkg => {
                    const isOpen = openPkg[pkg.id];
                    let savingsHtml = null;
                    if (pkg.savings) {
                      const save = pkg.savings.individualTotal - pkg.savings.packagePrice;
                      const pct = Math.round((save / pkg.savings.individualTotal) * 100);
                      savingsHtml = (
                        <div className="savings-box">
                          {pkg.savings.rows.map((r, ri) => <div className="savings-row" key={ri}><span>{r.label}</span><span className="cost">{fmtINR(r.cost)}</span></div>)}
                          <div className="savings-row total"><span>Individual total</span><span>{fmtINR(pkg.savings.individualTotal)}</span></div>
                          <div className="savings-row total"><span>Bundle price</span><span>{fmtINR(pkg.savings.packagePrice)}</span></div>
                          <div className="savings-highlight"><span>You save</span><span>{fmtINR(save)} ({pct}%)</span></div>
                        </div>
                      );
                    } else if (pkg.savingsNote) {
                      savingsHtml = <div className="savings-box"><p className="savings-note">{pkg.savingsNote}</p></div>;
                    }
                    return (
                      <div className={`pkg-mini ${pkg.popular ? "popular" : ""} ${isOpen ? "open" : ""}`} key={pkg.id}>
                        <div className="pkg-mini-head" onClick={() => togglePkg(pkg.id)}>
                          <div>
                            <div className="pkg-mini-name">{pkg.name} {pkg.popular && <span className="pkg-popular-tag">Most Popular</span>}</div>
                            <span className="pkg-mini-unit">{pkg.unit} · Suitable for: {pkg.suitableFor}</span>
                          </div>
                          <div style={{display:"flex",alignItems:"center",gap:10}}>
                            <div className="pkg-mini-price">{pkg.price}</div>
                            <span className="material-symbols-outlined chev">expand_more</span>
                          </div>
                        </div>
                        <div className="pkg-mini-body">
                          <div className="pkg-mini-body-inner">
                            {pkg.groups.map((g, gi) => (
                              <div className="include-group" key={gi}>
                                <div className="include-group-title">{g.title}</div>
                                <div className="include-grid">
                                  {g.items.map((item, ii) => <div className="include-chip" key={ii}><span className="material-symbols-outlined">check_circle</span>{item}</div>)}
                                </div>
                              </div>
                            ))}
                            <div className="si-block"><div className="sb-label">Savings</div></div>
                            {savingsHtml}
                            <div className="si-actions">
                              <button className="btn btn-primary" onClick={() => handleBook(pkg.name)}><span className="material-symbols-outlined">calendar_today</span> Book This Package</button>
                              <button className="btn btn-soft-green" onClick={() => window.open(WHATSAPP, "_blank")}><span className="material-symbols-outlined">chat</span> Talk to an Expert</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* FAQ */}
            <div className="p-section">
              <h3><span className="material-symbols-outlined">help</span> Frequently Asked Questions</h3>
              {[...svc.faqs, ...FAQ_SHARED].map((f, i) => {
                const fKey = `${svc.id}-faq-${i}`;
                return (
                  <div className={`faq-item ${openFaq === fKey ? "open" : ""}`} key={i}>
                    <button className="faq-q" onClick={() => toggleFaq(fKey)}>{f.q} <span className="material-symbols-outlined">expand_more</span></button>
                    <div className="faq-a"><p>{f.a}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="panel-sticky-cta">
          <button className="btn btn-soft-green icon-btn" onClick={() => window.open(WHATSAPP, "_blank")} aria-label="WhatsApp"><span className="material-symbols-outlined">chat</span></button>
          <button className="btn btn-secondary icon-btn" onClick={() => window.location.href = `tel:+919211338489`} aria-label="Call Now"><span className="material-symbols-outlined">call</span></button>
          <button className="btn btn-primary" onClick={() => handleBook(svc.id)} style={{flex:1}}><span className="material-symbols-outlined">calendar_today</span> Book Now</button>
        </div>
      </>
    );
  };

  return (
    <div className="tpf-services">
      {/* Hero */}
      <section className="services-hero">
        <span className="hero-blob b1" aria-hidden="true"></span>
        <span className="hero-blob b2" aria-hidden="true"></span>
        <span className="hero-blob b3" aria-hidden="true"></span>
        <div className="wrap" style={{maxWidth:"var(--maxw)",margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1,textAlign:"center"}}>
          <div className="hero-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3c-1.4 0-2.5 1.3-2.5 3s1.1 3 2.5 3 2.5-1.3 2.5-3-1.1-3-2.5-3z" fill="#fff"/>
              <path d="M6.5 6c-1.2 0-2.2 1.1-2.2 2.5S5.3 11 6.5 11s2.2-1.1 2.2-2.5S7.7 6 6.5 6z" fill="#fff"/>
              <path d="M17.5 6c-1.2 0-2.2 1.1-2.2 2.5S16.3 11 17.5 11s2.2-1.1 2.2-2.5S18.7 6 17.5 6z" fill="#fff"/>
              <path d="M8 21v-4c0-2.2 1.8-4 4-4s4 1.8 4 4v4H8z" fill="#fff"/>
            </svg>
          </div>
          <span className="eyebrow"><span className="material-symbols-outlined" style={{fontSize:15}}>pets</span> Trusted by 5,200+ Happy Pet Parents</span>
          <h1>Complete Care For <span>Every Paw</span></h1>
          <p className="lede">From routine check-ups to emergency care, grooming to training — every service your pet needs, delivered by certified professionals right at your doorstep across Delhi NCR.</p>
          <div className="btn-row" style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap"}}>
            <button className="btn btn-primary" onClick={() => document.getElementById("serviceGrid")?.scrollIntoView({behavior:"smooth"})}><span className="material-symbols-outlined">explore</span> Explore Services</button>
            <button className="btn btn-secondary" onClick={() => window.open(WHATSAPP, "_blank")}><span className="material-symbols-outlined">chat</span> Talk to an Expert</button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="num">5,200+</div><div className="lbl">Happy Pet Parents</div></div>
            <div className="hero-stat"><div className="num">5</div><div className="lbl">Clinics in Delhi NCR</div></div>
            <div className="hero-stat"><div className="num">15</div><div className="lbl">Services Offered</div></div>
          </div>
        </div>
      </section>

      {/* Sticky Category Nav */}
      <div className="cat-nav-wrap">
        <nav className={`cat-nav ${catNavShow ? "show" : ""}`} style={{position:"sticky",top:0}}>
          <div className="wrap" style={{maxWidth:"var(--maxw)",margin:"0 auto",padding:"0 24px"}}>
            <div className="cat-nav-inner">
              {SERVICES.map(s => (
                <button key={s.id} className={`cat-nav-item ${activeCard === s.id ? "active" : ""}`} onClick={() => {
                  setActiveCard(s.id);
                  document.getElementById(`card-${s.id}`)?.scrollIntoView({behavior:"smooth",block:"center"});
                }}>
                  <span className="material-symbols-outlined">{s.icon}</span> {s.title}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Intro */}
      <section className="services-intro">
        <div className="wrap" style={{maxWidth:"var(--maxw)",margin:"0 auto",padding:"0 24px"}}>
          <p>Every service below is delivered at your home by certified vets, groomers and trainers — no travel, no waiting rooms, no stress for your pet. Tap <strong>Explore Details</strong> on any card for the full picture.</p>
          <div className="trust-row">
            <div className="trust-chip"><span className="material-symbols-outlined">medical_services</span> Qualified Vet Surgeons</div>
            <div className="trust-chip"><span className="material-symbols-outlined">vaccines</span> US Standard Vaccines</div>
            <div className="trust-chip"><span className="material-symbols-outlined">home</span> 100% Doorstep</div>
            <div className="trust-chip"><span className="material-symbols-outlined">emergency</span> 24/7 Emergency Line</div>
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="services-grid-section">
        <div className="wrap" style={{maxWidth:"var(--maxw)",margin:"0 auto",padding:"0 24px"}}>
          <div className="service-grid" id="serviceGrid">
            {SERVICES.map((svc) => (
              <div className="svc-card" key={svc.id} id={`card-${svc.id}`}>
                {svc.popular && <div className="svc-popular-ribbon">Popular</div>}
                <div className="svc-frame">
                  <img src={svc.img} alt={svc.title} loading="lazy" />
                  <div className="svc-icon-badge"><span className="material-symbols-outlined">{svc.icon}</span></div>
                  <div className="doorstep-badge"><span className="material-symbols-outlined">home</span> Doorstep Service</div>
                </div>
                <div className="svc-body">
                  <div className="svc-title">{svc.title}</div>
                  <div className="svc-desc">{svc.cardDesc}</div>
                  <div className="svc-meta-row">
                    {svc.priceBadge
                      ? <div className="svc-price-tag"><span className="from">Starting from</span>{svc.priceBadge}</div>
                      : <div className="svc-price-tag"><span className="from">Pricing</span>Price on Request</div>}
                    <div className="svc-duration"><span className="material-symbols-outlined">schedule</span> {svc.duration}</div>
                  </div>
                  <div className="svc-chip-row">
                    {(svc.benefits || []).slice(0, 3).map((b, i) => <span className="svc-mini-chip" key={i}>{b.t}</span>)}
                  </div>
                  <div className="svc-actions">
                    <div className="btn-row">
                      <button className="btn btn-primary" onClick={() => handleBook(svc.id)}><span className="material-symbols-outlined">calendar_today</span> Book Now</button>
                      <button className="btn btn-secondary" onClick={() => openPanel(svc.id)}><span className="material-symbols-outlined">visibility</span> Explore Details</button>
                    </div>
                    <button className="svc-talk-link" onClick={() => window.open(WHATSAPP, "_blank")}><span className="material-symbols-outlined">chat</span> Talk to an Expert</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Tables */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="wrap" style={{maxWidth:"var(--maxw)",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-head-center">
            <span className="eyebrow"><span className="material-symbols-outlined" style={{fontSize:14}}>compare_arrows</span> Compare</span>
            <h2>Find Your Best Fit</h2>
            <p>Every price, session count and inclusion below comes straight from our official pricing — compare side by side before you book.</p>
          </div>
          <div className="compare-tabs">
            {[["training","Training"],["grooming","Grooming"],["vaccination","Vaccination"],["bundles","Yearly Bundles"]].map(([key, label]) => (
              <button key={key} className={`compare-tab ${compareTab === key ? "active" : ""}`} onClick={() => setCompareTab(key)}>{label}</button>
            ))}
          </div>
          <div className="compare-table-wrap">
            {renderCompareTable()}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="section">
        <div className="wrap" style={{maxWidth:"var(--maxw)",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-head-center">
            <span className="eyebrow"><span className="material-symbols-outlined" style={{fontSize:14}}>content_cut</span> Grooming</span>
            <h2>See The Full Grooming Difference</h2>
            <p>Drag the slider to compare.</p>
          </div>
          <div className="ba-wrap">
            <div className="ba-slider" id="baSlider"
              onPointerDown={(e) => { baDragging.current = true; handleBaMove(e.clientX); }}
              onPointerMove={(e) => { if (baDragging.current) handleBaMove(e.clientX); }}
              onPointerUp={() => { baDragging.current = false; }}
              onPointerLeave={() => { baDragging.current = false; }}
            >
              <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop" alt="Dog before grooming" />
              <div className="ba-after" style={{width:`${baPos}%`}}>
                <img src="https://images.unsplash.com/photo-1601758125946-6ac8acedfdb3?q=80&w=1000&auto=format&fit=crop" alt="Dog after Full Grooming" />
              </div>
              <div className="ba-tag before-tag">Before</div>
              <div className="ba-tag after-tag">After</div>
              <div className="ba-handle" style={{left:`${baPos}%`}}></div>
            </div>
            <p className="ba-caption">Full Grooming session — bathing, trimming, dematting, and finishing touches.</p>
          </div>
        </div>
      </section>

      {/* Meet Our Experts */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="wrap" style={{maxWidth:"var(--maxw)",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-head-center">
            <span className="eyebrow"><span className="material-symbols-outlined" style={{fontSize:14}}>groups</span> Our Team</span>
            <h2>Meet Our Experts</h2>
            <p>Certified professionals behind every visit.</p>
          </div>
          <div className="experts-grid">
            {EXPERTS.map((e, i) => (
              <div className="expert-card" key={i}>
                <div className="expert-photo">
                  <img src={e.img} alt={e.role} loading="lazy" />
                  <div className="expert-role-tag"><span className="material-symbols-outlined" style={{fontSize:13}}>{e.icon}</span> {e.role}</div>
                </div>
                <div className="expert-body">
                  <div className="expert-name">{e.name}</div>
                  <div className="expert-cred">{e.cred}</div>
                  <div className="expert-desc">{e.desc}</div>
                  <div className="expert-tags">{e.tags.map((t, ti) => <span key={ti}>{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="wrap" style={{maxWidth:"var(--maxw)",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-head-center">
            <span className="eyebrow"><span className="material-symbols-outlined" style={{fontSize:14}}>route</span> Process</span>
            <h2>How It Works</h2>
            <p>From booking to feedback, in five simple steps.</p>
          </div>
          <div className="hiw-timeline">
            {HOW_IT_WORKS.map((s, i) => (
              <div className="hiw-step" key={i}>
                <div className="hiw-icon"><span className="material-symbols-outlined">{s.icon}</span></div>
                <div className="hiw-title">{s.t}</div>
                <div className="hiw-desc">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why The Paws Friend */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="wrap" style={{maxWidth:"var(--maxw)",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-head-center">
            <span className="eyebrow"><span className="material-symbols-outlined" style={{fontSize:14}}>workspace_premium</span> Why Us</span>
            <h2>Why The Paws Friend</h2>
            <p>Every visit is backed by the same standard of care.</p>
          </div>
          <div className="whyus-grid">
            {WHYUS_FULL.map((w, i) => (
              <div className="whyus-card" key={i}>
                <span className="material-symbols-outlined">{w.icon}</span>
                <div className="t">{w.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="wrap" style={{maxWidth:"var(--maxw)",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-head-center">
            <span className="eyebrow"><span className="material-symbols-outlined" style={{fontSize:14}}>photo_library</span> Gallery</span>
            <h2>Care In Action</h2>
          </div>
          <div className="gallery-masonry">
            {GALLERY_IMAGES.map((src, i) => (
              <div className="gallery-item" key={i} onClick={() => { setLightboxIdx(i); setLightboxOpen(true); }}>
                <img src={src} alt="The Paws Friend care" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="wrap" style={{maxWidth:"var(--maxw)",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-head-center" style={{marginBottom:8}}>
            <span className="eyebrow"><span className="material-symbols-outlined" style={{fontSize:14}}>rate_review</span> Reviews</span>
            <h2>What Pet Parents Say</h2>
          </div>
          <div className="reviews-grid">
            <p className="desc" style={{textAlign:"center",gridColumn:"1/-1"}}>Verified customer reviews will appear here once connected to our live reviews feed.</p>
          </div>
        </div>
      </section>

      {/* Page FAQ */}
      <section className="section">
        <div className="wrap" style={{maxWidth:760,margin:"0 auto",padding:"0 24px"}}>
          <div className="section-head-center">
            <span className="eyebrow"><span className="material-symbols-outlined" style={{fontSize:14}}>help</span> FAQ</span>
            <h2>Common Questions</h2>
          </div>
          <div>
            {PAGE_FAQS.map((f, i) => (
              <div className={`faq-item ${openFaq === `page-${i}` ? "open" : ""}`} key={i}>
                <button className="faq-q" onClick={() => toggleFaq(`page-${i}`)}>{f.q} <span className="material-symbols-outlined">expand_more</span></button>
                <div className="faq-a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="wrap section-tight" style={{maxWidth:"var(--maxw)",margin:"0 auto",padding:"0 24px"}}>
        <div className="final-cta">
          <h2>Need Help Choosing?</h2>
          <p>Tell us about your pet and we will help you pick the right service or plan — no obligation.</p>
          <div className="cta-row">
            <button className="btn btn-primary" onClick={() => window.open(WHATSAPP, "_blank")}><span className="material-symbols-outlined">chat</span> Book Free Consultation</button>
            <button className="btn btn-outline" onClick={() => window.location.href = `tel:+919211338489`}><span className="material-symbols-outlined">call</span> Call Now</button>
            <button className="btn btn-outline" onClick={() => window.open(WHATSAPP, "_blank")}><span className="material-symbols-outlined">forum</span> WhatsApp Us</button>
          </div>
        </div>
      </section>

      {/* Panel Backdrop */}
      <div className={`panel-backdrop ${panelOpen ? "open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) closePanel(); }}>
        <div className="panel" ref={panelRef}>
          {renderPanelContent()}
        </div>
      </div>

      {/* Lightbox */}
      <div className={`lightbox ${lightboxOpen ? "open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) setLightboxOpen(false); }}>
        <button className="lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close gallery"><span className="material-symbols-outlined">close</span></button>
        <button className="lightbox-nav prev" onClick={() => setLightboxIdx((lightboxIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)} aria-label="Previous photo"><span className="material-symbols-outlined">chevron_left</span></button>
        <img src={GALLERY_IMAGES[lightboxIdx]} alt="Gallery photo" />
        <button className="lightbox-nav next" onClick={() => setLightboxIdx((lightboxIdx + 1) % GALLERY_IMAGES.length)} aria-label="Next photo"><span className="material-symbols-outlined">chevron_right</span></button>
      </div>
    </div>
  );
}

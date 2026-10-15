import { SelectValue } from '@/components/ui/select'
import {
  IconBabyCarriage, IconBone, IconCat, IconDog, IconHeartHandshake, IconMapPin, IconMicroscope,
  IconScissors, IconSchool, IconStethoscope, IconTrophy, type Icon,
} from '@tabler/icons-react'
import { cities } from '@/lib/content'

const icons: Record<string, Icon> = {
  Dog: IconDog,
  Cat: IconCat,
  'Veterinary care': IconStethoscope,
  Grooming: IconScissors,
  'Dog training': IconBone,
  Diagnostics: IconMicroscope,
  'Puppy (2-6 Mo)': IconBabyCarriage,
  'Basic (6+ Mo)': IconSchool,
  Advanced: IconTrophy,
  'Behavioral Fix': IconHeartHandshake,
  'Delhi NCR': IconMapPin,
  ...Object.fromEntries(cities.map((c) => [c, IconMapPin])),
}

/** Select option / selected value with its Tabler icon. */
export function Opt({ v }: { v: string }) {
  const I = icons[v]
  return <span className="flex items-center gap-2.5">{I && <I size={18} stroke={1.6} className="shrink-0 text-brand" />}{v}</span>
}

/** Drop-in for <SelectValue placeholder=…> that shows the icon of the chosen option. */
export function IconSelectValue({ placeholder }: { placeholder: string }) {
  return <SelectValue>{(v: string | null) => (v ? <Opt v={v} /> : <span className="text-[#9b9187]">{placeholder}</span>)}</SelectValue>
}

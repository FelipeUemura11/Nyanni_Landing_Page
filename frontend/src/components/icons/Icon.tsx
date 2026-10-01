import {
    Accessibility,
    ArrowRight,
    Bath,
    Brain,
    BriefcaseMedical,
    Check,
    ChevronDown,
    HandHelping,
    Heart,
    House,
    Mail,
    Menu,
    MessagesCircle,
    PersonStanding,
    Phone,
    PillBottle,
    ShieldPlus,
    Shirt,
    Users,
    UsersRound,
    Utensils,
    X,
    type LucideIcon,
    type LucideProps,
} from "lucide-react";

/**
 * Ícones do site (Lucide: https://lucide.dev/icons).
 *
 * Para usar um ícone novo: importe-o acima, adicione uma linha aqui
 * (nome usado no site.ts → componente do Lucide) e pronto.
 */
const ICONS = {
    arrowRight: ArrowRight,
    chevronDown: ChevronDown,
    menu: Menu,
    close: X,
    message: MessagesCircle,
    phone: Phone,
    mail: Mail,
    heart: Heart,
    home: House,
    users: Users,
    family: UsersRound,
    personStanding: PersonStanding,
    handHelping: HandHelping,
    briefcaseMedical: BriefcaseMedical,
    utensils: Utensils,
    pillBottle: PillBottle,
    shieldPlus: ShieldPlus,
    stretch: Accessibility,
    shirt: Shirt,
    bath: Bath,
    brain: Brain,
    check: Check,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

interface IconProps extends Omit<LucideProps, "ref"> {
    name: IconName;
}

export function Icon({
    name,
    size = 20,
    strokeWidth = 1.6,
    ...rest
}: IconProps) {
    const Component = ICONS[name];
    return <Component size={size} strokeWidth={strokeWidth} {...rest} />;
}

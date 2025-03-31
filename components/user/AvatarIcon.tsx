import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type IconProp = {
  icon?: string | undefined;
};

export function AvatarIcon({ icon }: IconProp) {
  return (
    <Avatar>
      <AvatarImage src={icon} alt="@shadcn" />
      <AvatarFallback>CB</AvatarFallback>
    </Avatar>
  );
}

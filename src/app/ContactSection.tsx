interface ContactSectionProps {
  backgroundColor: string;
}

export const ContactSection = ({ backgroundColor }: ContactSectionProps) => {
  return (
    <div style={{ backgroundColor: `${backgroundColor}` }}>ContactSection</div>
  );
};

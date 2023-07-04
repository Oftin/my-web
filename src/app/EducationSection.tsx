interface EducationSectionProps {
  backgroundColor: string;
}

export const EducationSection = ({
  backgroundColor,
}: EducationSectionProps) => {
  return (
    <div style={{ backgroundColor: `${backgroundColor}` }}>
      EducationSection
    </div>
  );
};

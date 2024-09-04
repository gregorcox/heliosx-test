const submitConsultation = (formData: (string | null)[]) => {
  try {
    console.log("Results:", formData);
  } catch (err) {
    console.log(err);
  }
};

export default submitConsultation;

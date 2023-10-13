const LeadAdapter = {
  toBackend(frontendData) {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      yearOfInscription,
      careerId,
      address,
    } = frontendData;

    const backendData = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone_number: phoneNumber,
      year_of_inscription: yearOfInscription,
      career_id: careerId,
      address: {
        street: address.street,
        number: address.number,
        city: address.city,
        province: address.province,
        country: address.country,
      },
    };

    return backendData;
  },

  toFrontend(backendData) {
    const {
      id,
      first_name: firstName,
      last_name: lastName,
      email,
      phone_number: phoneNumber,
      year_of_inscription: yearOfInscription,
      career_id: careerId,
      address,
    } = backendData;

    const frontendData = {
      id,
      firstName,
      lastName,
      email,
      phoneNumber,
      yearOfInscription,
      careerId,
      address: {
        street: address.street,
        number: address.number,
        city: address.city,
        province: address.province,
        country: address.country,
      },
    };

    return frontendData;
  },
};


export default LeadAdapter;

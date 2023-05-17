export const operationalTime = [
  "6:00 AM",
  "6:15 AM",
  "6:30 AM",
  "6:45 AM",
  "7:00 AM",
  "7:15 AM",
  "7:30 AM",
  "7:45 AM",
  "8:00 AM",
  "8:15 AM",
  "8:30 AM",
  "8:45 AM",
  "9:00 AM",
  "9:15 AM",
  "9:30 AM",
  "9:45 AM",
  "10:00 AM",
  "10:15 AM",
  "10:30 AM",
  "10:45 AM",
  "11:00 AM",
  "11:15 AM",
  "11:30 AM",
  "11:45 AM",
  "12:00 PM",
  "12:15 PM",
  "12:30 PM",
  "12:45 PM",
  "1:00 PM",
  "1:15 PM",
  "1:30 PM",
  "1:45 PM",
  "2:00 PM",
  "2:15 PM",
  "2:30 PM",
  "2:45 PM",
  "3:00 PM",
  "3:15 PM",
  "3:30 PM",
  "3:45 PM",
  "4:00 PM",
  "4:15 PM",
  "4:30 PM",
  "4:45 PM",
  "5:00 PM",
  "5:15 PM",
  "5:30 PM",
  "5:45 PM",
];

//Names of Data and IDs
const fieldIDs = [
  ["First_Name", "f_name"],
  ["Middle_Name", "m_name"],
  ["Last_Name", "l_name"],
  ["Date_of_Birth", "dob"],
  ["Client_Indentification_Number", "cin"],
  ["Primary_Tel", "primary_contact"],
  ["Secondary_Tel", "second_contact"],
  ["Appointment_Date", "appt_d"],
  ["Auto_Generated_Pickup_Time", "gen-pu"],
  ["Pickup_Time", "pu_t"],
  ["Appointment_Time", "appt_t"],
  ["Pickup_Address_1", "pu_Address"],
  ["Pickup_Address_2", "pu_Address2"],
  ["Pickup_City", "pu_City"],
  ["Pickup_State", "pu_State"],
  ["Pickup_Postal_Code", "pu_Zip"],
  ["Dropoff_Address_1", "do_Address"],
  ["Dropoff_Address_2", "do_Address2"],
  ["Dropoff_City", "do_City"],
  ["Dropoff_State", "do_State"],
  ["Dropoff_Postal_Code", "do_Zip"],
  ["Round_Trip_Option", "rt"],
  ["Round_Trip_Time", "rt_t"],
  ["Trip_Comments", "comment"],
  ["Doctor_Name", "doc_name"],
  ["National_Provider_Identifier", "npi"],
  ["Facility_Email", "med_email"],
];

export const fieldData = (array) => {
  const obj = {};
  if ([...array].length > 0) {
    fieldIDs.push(...array);
  }
  for (const ids of fieldIDs) {
    const [key, id] = ids;
    const field = document.getElementById(id);
    if (field) {
      obj[key] = field.value;
    }
  }
  return obj;
};

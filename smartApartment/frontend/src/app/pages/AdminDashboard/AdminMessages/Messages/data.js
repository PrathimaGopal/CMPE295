import {getCustomDateTime} from "@jumbo/utils";

export const latestNotifications = [
  {
    type: "MESSAGES",
    total: 10,
    records: [
      {
        id: 1,
        name: "Resident 1",
        item: "Fridge",
        complaint: "Constant noise in Fridge",
        time: getCustomDateTime(-5, "minutes"),
        status: "false",
      },
      {
        id: 2,
        name: "Resident 3",
        item: "Microwave",
        complaint: "Microwave not working",
        time: getCustomDateTime(-10),
        status: "false",
      },
      {
        id: 3,
        name: "Resident 7",
        item: "Washer-Dryer",
        complaint: "Water leaking in Washer",
        time: getCustomDateTime(-25),
        status: "false",
      },
      {
        id: 4,
        name: "Resident 4",
        item: "Others",
        complaint: "Noise from fire alarm frequently",
        time: getCustomDateTime(-35),
        status: "true",
      },
      {
        id: 5,
        name: "Resident 10",
        item: "IoT device",
        complaint: "Door lock not working",
        time: getCustomDateTime(-37),
        status: "false",
      },
    ],
  },
];

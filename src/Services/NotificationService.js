import * as Notifications from "expo-notifications";

//criar e em tempo real conseguir ver e receber a informação
//na data correta
async function createNotification(
  habitInput,
  frequencyInput,
  dayNotification,
  timeNotification
) {
  const habitHour = Number(timeNotification.slice(0, 2));
  const habitMinutes = Number(timeNotification.slice(3, 5));

  //se o uruário escolher semanal, diário
  //setar a informação, tipo de hábito
  let weekDay;
  if (dayNotification === "Domingo") {
    weekDay = 1;
  } else if (dayNotification === "Segunda") {
    weekDay = 2;
  } else if (dayNotification === "Terça") {
    weekDay = 3;
  } else if (dayNotification === "Quarta") {
    weekDay = 4;
  } else if (dayNotification === "Quinta") {
    weekDay = 5;
  } else if (dayNotification === "Sexta") {
    weekDay = 6;
  } else if (dayNotification === "Sábado") {
    weekDay = 7;
  }

  //gatilho- acionar alguma coisa baseado em uma informação
  //após setar esta notificação, como ela vai ser notificada
  let triggerNotification;
  if (frequencyInput === "Diário") {
    triggerNotification = {
      hour: habitHour,
      minute: habitMinutes,
      repeats: true,
    };
  } else if (frequencyInput === "Semanal") {
    triggerNotification = {
      repeats: true,
      weekday: weekDay,
      hour: habitHour,
      minute: habitMinutes,
    };
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Lembrete de hábito:",
      body: `${habitInput}`,
    },
    //identificador do hábito
    identifier: `${habitInput}`,
    //do próprio expo que busca a notificação
    trigger: triggerNotification,
  }).then((id) => {
    console.log(id);
  });
}

export default { createNotification };

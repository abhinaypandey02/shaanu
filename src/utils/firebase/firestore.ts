import UserInterface, { defaultUser } from "../../interfaces/user";
import fire from "./fire";
import "firebase/firestore";
import { CarProfile } from "../../interfaces/car";
import { BookedSession } from "../../interfaces/bookedSession";
import CallbackRequest from "../../interfaces/callbackRequest";
import JobInterface from "../../interfaces/job";
import { Checkout } from "../../interfaces/checkout";
import { ReviewInterface } from "../../interfaces/reviewInterface";

export async function setUserDocument(user_data: UserInterface) {
  await fire
    .firestore()
    .collection("users")
    .doc("+91" + user_data.phone.toString())
    .set(user_data);
}

export async function getUserDocument(
  phone: string
): Promise<UserInterface | null> {
  let user_doc: UserInterface | null = null;
  console.log(phone);
  const doc = await fire.firestore().collection("users").doc(phone).get();
  if (doc && doc.exists) {
    const doc_data = doc.data();
    user_doc = {
      ...defaultUser,
      ...doc_data,
    };
  }
  return user_doc;
}

export async function getUsers() {
  const data = await fire.firestore().collection("users").get();
  let arr: UserInterface[] = [];
  data.docs.forEach((doc: any) => {
    arr.push(doc.data());
  });
  return arr;
}

export async function getCallbackRequests() {
  const data = await fire.firestore().collection("callbackRequests").get();
  let arr: CallbackRequest[] = [];
  data.docs.forEach((doc: any) => {
    arr.push(doc.data());
  });
  return arr;
}

export async function getAllBookedSessions() {
  const data = await fire.firestore().collection("bookedSessions").get();
  let arr: BookedSession[] = [];
  data.docs.forEach((doc: any) => {
    arr.push(doc.data());
  });
  return arr;
}

export async function addCarProfile(
  user: UserInterface,
  carProfiles: CarProfile[]
) {
  await fire
    .firestore()
    .collection("users")
    .doc("+91" + user.phone.toString())
    .update({ carProfiles });
}

export async function addCallbackRequest(request: CallbackRequest) {
  return await fire.firestore().collection("callbackRequests").add(request);
}

export async function addBookedSession(session: BookedSession) {
  await fire.firestore().collection("bookedSessions").add(session);
  await updateBookedSessionsCount((await getBookedSessionsCount()) + 1);
}

export async function getBookedSessionsByMonth(month: number) {
  const data = await fire
    .firestore()
    .collection("bookedSessions")
    .where("month", "==", month)
    .get();

  if (!data.empty && data.docs.length > 0) {
    const temp: any = [];
    data.docs.forEach((doc) => {
      temp.push(doc.data());
    });
    return temp;
  }
  return [];
}

export async function setJob(job: JobInterface) {
  return await fire.firestore().collection("jobs").doc(job.id).set(job);
}

export async function getJobs() {
  return await fire
    .firestore()
    .collection("jobs")
    .get()
    .then((data) => data.docs.map((doc) => doc.data()));
}

export async function getCheckouts() {
  return await fire
    .firestore()
    .collection("checkouts")
    .get()
    .then((data) => data.docs.map((doc) => doc.data()));
}

export async function getJob(jobID: string) {
  return await fire
    .firestore()
    .collection("jobs")
    .doc(jobID)
    .get()
    .then((doc) => doc.data());
}

export async function deleteJob(jobID: string) {
  return await fire.firestore().collection("jobs").doc(jobID).delete();
}

async function updateBookedSessionsCount(newCount: number) {
  return await fire.firestore().collection("metadata").doc("metadata").update({
    bookedSessions: newCount,
  });
}

export async function getBookedSessionsCount(): Promise<number> {
  const data = (
    await fire.firestore().collection("metadata").doc("metadata").get()
  ).data();
  if (data) {
    return data.bookedSessions;
  }
  return 0;
}

export async function getToken(): Promise<number> {
  return (await getBookedSessionsCount()) + 10000;
}

export async function addCheckout(checkout: Checkout) {
  return await fire.firestore().collection("checkouts").add(checkout);
}

export async function addReview(review: ReviewInterface) {
  return await fire.firestore().collection("review").add(review);
}

export async function getReviews() {
  return await fire
    .firestore()
    .collection("review")
    .get()
    .then((data) => data.docs.map((doc) => doc.data()));
}

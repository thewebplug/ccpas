"use client";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';


export default function Calendar() {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [meetingUrl, setMeetingUrl] = useState("");
  const [meetingLocation, setMeetingLocation] = useState("");
  const [meetingParticipants, setMeetingParticipants] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [allDay, setAllDay] = useState(true);
  const [open, setOpen] = useState(false);
  const [clickedCalendar, setClickedCalendar] = useState(false);
  const [selectInfo, setSelectInfo] = useState(false);
  const [viewEventOpen, setViewEventOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  let eventGuid = 0;
  let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "All-day event",
      start: todayStr,
    },
    {
      id: createEventId(),
      title: "Timed event",
      start: todayStr + "T12:00:00",
    },
  ];

  function createEventId() {
    return String(eventGuid++);
  }

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }

  function handleCreateEventOpen(event) {
    console.log("event", event);

    setSelectInfo(event);
    setOpen(true);
  }

  function handleDateSelect() {
    // setClickedCalendar(true);

    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    // if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      meetingUrl,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
    setOpen(false);
    setTitle("");
    setMeetingUrl("");
    setMeetingLocation("");
    setMeetingParticipants("");
    // }
  }

  function handleEventClick(clickInfo) {
    setViewEventOpen(true)
    setSelectedEvent(clickInfo)
    console.log("clickInfo", clickInfo);
    //   if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //     clickInfo.event.remove()
    //   }
  }

  useEffect (() => {
console.log('selectedEvent', selectedEvent);

  }, [selectedEvent])

  function handleEvents(events) {
    setCurrentEvents(events);
  }

  function handleViewModalClose(e) {

    if(e.target.classList.contains("calendar__view-event")) {
        setViewEventOpen(false)
    }
    
  }
  return (
    <div className="demo-app calendar">
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrap5Plugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleCreateEventOpen}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
        eventAdd={function(){}}
        eventChange={function(){}}
        eventRemove={function(){}}
        */
       eventColor="#F0F9F2"  // Default color for all events
  eventTextColor="#03781D"
  eventBorderColor="#C2EECC"

        />
      </div>

      {open && (
        <div className="calendar__create-event">
          <form
            className="calendar__create-event__inner"
            onSubmit={handleDateSelect}
          >
            <div className="calendar__create-event__inner__title">
              <div>Add new event</div>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer"
                onClick={() => setOpen(false)}
              >
                <path
                  d="M10.0179 18.8346C14.6012 18.8346 18.3512 15.0846 18.3512 10.5013C18.3512 5.91797 14.6012 2.16797 10.0179 2.16797C5.43457 2.16797 1.68457 5.91797 1.68457 10.5013C1.68457 15.0846 5.43457 18.8346 10.0179 18.8346Z"
                  stroke="#7E7E7E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.65918 12.8573L12.3758 8.14062"
                  stroke="#7E7E7E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.3758 12.8573L7.65918 8.14062"
                  stroke="#7E7E7E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <input
              type="text"
              className="calendar__create-event__inner__input"
              placeholder="Meeting heading..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            {/* <div className="calendar__create-event__inner__date">
            <div className="calendar__create-event__inner__date__title">
              <div>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0638 7.9987C15.0638 11.6787 12.0771 14.6654 8.39714 14.6654C4.71714 14.6654 1.73047 11.6787 1.73047 7.9987C1.73047 4.3187 4.71714 1.33203 8.39714 1.33203C12.0771 1.33203 15.0638 4.3187 15.0638 7.9987Z"
                    stroke="#7E7E7E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.8704 10.1211L8.80372 8.88781C8.44372 8.67448 8.15039 8.16115 8.15039 7.74115V5.00781"
                    stroke="#7E7E7E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div>Date & Time</div>
              </div>

              <select name="" id="">
                <option value="">Timezone</option>
              </select>
            </div>

            <div className="calendar__create-event__inner__date__flex">
              <div>On</div>
              <input type="date" name="" id=""
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              />
            </div>
            <div className="calendar__create-event__inner__date__flex">
              <div>To</div>
              <input type="date" name="" id=""
               value={endDate}
               onChange={(e) => setEndDate(e.target.value)}
               required
              />
            </div>
            <div className="calendar__create-event__inner__date__flex">
              <div>From</div>
              <input type="time" name="" id="" 
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className="calendar__create-event__inner__date__flex">
              <div>To</div>
              <input type="time" name="" id=""
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div> */}

            <div className="calendar__create-event__inner__flex">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15.7285 3.88396C17.1629 2.44407 19.2609 2.41383 20.4224 3.57981C21.586 4.74798 21.5547 6.85922 20.1194 8.30009L17.6956 10.7333C17.4033 11.0268 17.4042 11.5017 17.6976 11.794C17.9911 12.0863 18.466 12.0854 18.7583 11.7919L21.1821 9.35869C23.0934 7.43998 23.3334 4.37665 21.4851 2.5212C19.6346 0.663551 16.5781 0.905664 14.6658 2.82536L9.81817 7.69182C7.90688 9.61053 7.66692 12.6739 9.51519 14.5293C9.80751 14.8228 10.2824 14.8237 10.5758 14.5314C10.8693 14.2391 10.8702 13.7642 10.5779 13.4707C9.41425 12.3026 9.44559 10.1913 10.8809 8.75042L15.7285 3.88396Z"
                    fill="#7E7E7E"
                  ></path>{" "}
                  <path
                    d="M14.4851 9.47074C14.1928 9.17728 13.7179 9.17636 13.4244 9.46868C13.131 9.76101 13.1301 10.2359 13.4224 10.5293C14.586 11.6975 14.5547 13.8087 13.1194 15.2496L8.27178 20.1161C6.83745 21.556 4.73937 21.5863 3.57791 20.4203C2.41424 19.2521 2.44559 17.1408 3.88089 15.6999L6.30473 13.2667C6.59706 12.9732 6.59614 12.4984 6.30268 12.206C6.00922 11.9137 5.53434 11.9146 5.24202 12.2081L2.81818 14.6413C0.906876 16.5601 0.666916 19.6234 2.51519 21.4789C4.36567 23.3365 7.42221 23.0944 9.33449 21.1747L14.1821 16.3082C16.0934 14.3895 16.3334 11.3262 14.4851 9.47074Z"
                    fill="#7E7E7E"
                  ></path>{" "}
                </g>
              </svg>

              <input
                type="text"
                placeholder="Meeting link"
                value={meetingUrl}
                onChange={(e) => setMeetingUrl(e.target.value)}
              />
            </div>
            <div className="calendar__create-event__inner__flex">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.39641 9.45297C9.54516 9.45297 10.4764 8.52172 10.4764 7.37297C10.4764 6.22422 9.54516 5.29297 8.39641 5.29297C7.24765 5.29297 6.31641 6.22422 6.31641 7.37297C6.31641 8.52172 7.24765 9.45297 8.39641 9.45297Z"
                  stroke="#7E7E7E"
                  stroke-width="1.5"
                />
                <path
                  d="M2.81027 6.1587C4.12361 0.385366 12.6769 0.392033 13.9836 6.16537C14.7503 9.55203 12.6436 12.4187 10.7969 14.192C9.45694 15.4854 7.33694 15.4854 5.99028 14.192C4.15028 12.4187 2.04361 9.54537 2.81027 6.1587Z"
                  stroke="#7E7E7E"
                  stroke-width="1.5"
                />
              </svg>

              <input
                type="text"
                placeholder="Choose location"
                value={meetingLocation}
                onChange={(e) => setMeetingLocation(e.target.value)}
              />
            </div>
            <div className="calendar__create-event__inner__flex">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.39583 8.4987C10.2368 8.4987 11.7292 7.00631 11.7292 5.16536C11.7292 3.32442 10.2368 1.83203 8.39583 1.83203C6.55488 1.83203 5.0625 3.32442 5.0625 5.16536C5.0625 7.00631 6.55488 8.4987 8.39583 8.4987Z"
                  stroke="#7E7E7E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.66992 15.1667C2.66992 12.5867 5.23659 10.5 8.39659 10.5C9.03659 10.5 9.65659 10.5867 10.2366 10.7467"
                  stroke="#7E7E7E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.0638 12.4987C15.0638 12.712 15.0371 12.9187 14.9838 13.1187C14.9238 13.3854 14.8171 13.6454 14.6771 13.872C14.2171 14.6454 13.3705 15.1654 12.3971 15.1654C11.7105 15.1654 11.0905 14.9053 10.6238 14.4787C10.4238 14.3053 10.2505 14.0987 10.1171 13.872C9.87046 13.472 9.73047 12.9987 9.73047 12.4987C9.73047 11.7787 10.0171 11.1187 10.4838 10.6387C10.9705 10.1387 11.6505 9.83203 12.3971 9.83203C13.1838 9.83203 13.8971 10.172 14.3771 10.7187C14.8038 11.192 15.0638 11.8187 15.0638 12.4987Z"
                  stroke="#7E7E7E"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.389 12.4844H11.4023"
                  stroke="#7E7E7E"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.3965 11.5117V13.505"
                  stroke="#7E7E7E"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                type="text"
                placeholder="Add participants"
                value={meetingParticipants}
                onChange={(e) => setMeetingParticipants(e.target.value)}
              />
            </div>

            <div className="calendar__create-event__inner__buttons">
              <button type="button" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      )}

      {viewEventOpen && <div className="calendar__view-event" onClick={handleViewModalClose}>
        <div className="calendar__view-event__inner"
        
        >
          <div className="calendar__view-event__inner__title">
            <div className="calendar__view-event__inner__title__inner">
              <div>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5" cy="5" r="5" fill="#03781D" />
                </svg>

                <div>{selectedEvent?.event?.title}</div>
              </div>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6673 7.9987C14.6673 11.6787 11.6807 14.6654 8.00065 14.6654C4.32065 14.6654 1.33398 11.6787 1.33398 7.9987C1.33398 4.3187 4.32065 1.33203 8.00065 1.33203C11.6807 1.33203 14.6673 4.3187 14.6673 7.9987Z"
                    stroke="#7E7E7E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.4739 10.1211L8.40724 8.88781C8.04724 8.67448 7.75391 8.16115 7.75391 7.74115V5.00781"
                    stroke="#7E7E7E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div>{selectedEvent?.event?.start?.toString()?.split("(")[0]} {!!selectedEvent?.event?.end && "-"} {selectedEvent?.event?.end?.toString()?.split("(")[0]}</div>
              </div>
            </div>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1327_26577)">
                <path
                  d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                  fill="#7E7E7E"
                />
              </g>
              <defs>
                <clipPath id="clip0_1327_26577">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="calendar__view-event__inner__participants">
            <div className="calendar__view-event__inner__participants__title">
              <div>Participants (3)</div>
              <div>
                <div>See all</div>

                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.50008 2.04094L7.76008 5.30094C8.14508 5.68594 8.14508 6.31594 7.76008 6.70094L4.50008 9.96094"
                    stroke="#006FD5"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="calendar__view-event__inner__participants__card">
                <div>
                <Image
              alt=""
              src="/assets/logo.png"
              width={32}
              height={32}
              style={{borderRadius: "50%"}}
            />
                    <div>Prashant Kumar Singh</div>
                </div>

                <button className="calendar__view-event__inner__participants__card__pending">Pending</button>
            </div>
            <div className="calendar__view-event__inner__participants__card">
                <div>
                <Image
              alt=""
              src="/assets/logo.png"
              width={32}
              height={32}
              style={{borderRadius: "50%"}}
            />
                    <div>Prashant Kumar Singh</div>
                </div>

                <button className="calendar__view-event__inner__participants__card__accepted">Accepted</button>
            </div>
            <div className="calendar__view-event__inner__participants__card">
                <div>
                <Image
              alt=""
              src="/assets/logo.png"
              width={32}
              height={32}
              style={{borderRadius: "50%"}}
            />
                    <div>Prashant Kumar Singh</div>
                </div>

                <button className="calendar__view-event__inner__participants__card__rejected">Rejected</button>
            </div>
          </div>
          <Link href={selectedEvent?.event?.extendedProps?.meetingUrl || ""} target="_blank" rel="noopener noreferrer">

          <button className="calendar__view-event__inner__link"
          >
      
Go to meet link
          </button>
          </Link>
        </div>
      </div>}
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

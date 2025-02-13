import { format, getDay, parse, startOfWeek } from "date-fns";
import { es } from "date-fns/locale";
import { type SetStateAction, useCallback, useEffect, useState } from "react";
import {
  Calendar as Primitive,
  dateFnsLocalizer,
  type View,
  Views,
} from "react-big-calendar";

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: {
    es,
  },
});

const messages = {
  agenda: "Agenda",
  day: "Día",
  allDay: "Todo el día",
  week: "Semana",
  month: "Mes",
  previous: "Anterior",
  next: "Siguiente",
  today: "Hoy",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  tomorrow: "Mañana",
  yesterday: "Ayer",
  work_week: "Semana laboral",
  noEventsInRange: "No hay eventos en este rango",
  showMore: (total: number) => `+${total} más`,
};

const events = [
  {
    start: new Date("2025-01-18T01:00:00Z"),
    end: new Date("2025-01-18T03:30:00Z"),
    title: "Intro",
  },
  {
    start: new Date("2025-01-23T00:10:00Z"),
    end: new Date("2025-01-23T01:50:00Z"),
    title: "Números",
  },
  {
    start: new Date("2025-01-25T01:00:00Z"),
    end: new Date("2025-01-25T03:30:00Z"),
    title: "Números",
  },
  {
    start: new Date("2025-01-30T00:10:00Z"),
    end: new Date("2025-01-30T01:50:00Z"),
    title: "Intro a C",
  },
  {
    start: new Date("2025-02-01T01:00:00Z"),
    end: new Date("2025-02-01T03:30:00Z"),
    title: "Intro a C",
  },
  {
    start: new Date("2025-02-06T00:10:00Z"),
    end: new Date("2025-02-06T01:50:00Z"),
    title: "Punteros en C",
  },
  {
    start: new Date("2025-02-08T01:00:00Z"),
    end: new Date("2025-02-08T03:30:00Z"),
    title: "Punteros en C",
  },
  {
    start: new Date("2025-02-13T00:10:00Z"),
    end: new Date("2025-02-13T01:50:00Z"),
    title: "Manejo de Memoria en C",
  },
  {
    start: new Date("2025-02-15T01:00:00Z"),
    end: new Date("2025-02-15T03:30:00Z"),
    title: "Manejo de Memoria en C",
  },
  {
    start: new Date("2025-02-19T00:00:00Z"),
    end: new Date("2025-02-19T03:00:00Z"),
    title: "Examen Parcial 1",
  },
];

export function Calendar() {
  const [windowWidth, setWindowWidth] = useState(320);
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>(Views.AGENDA);
  const [views, setViews] = useState<View[]>([
    Views.MONTH,
    Views.WEEK,
    Views.DAY,
    Views.AGENDA,
  ]);

  const handleNavigate = useCallback((newDate: Date) => {
    setDate(newDate);
  }, []);

  const handleViewChange = useCallback((newView: SetStateAction<any>) => {
    setView(newView);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth < 640) {
        setView(Views.AGENDA);
        setViews([Views.DAY, Views.AGENDA]);
      } else {
        setView(Views.AGENDA);
        setViews([Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <div
      className="w-full"
      style={{ height: `${windowWidth < 640 ? 500 : 800}px` }}
    >
      <Primitive
        date={date}
        view={view}
        views={views}
        culture="es"
        events={events}
        selectable={false}
        messages={messages}
        localizer={localizer}
        onView={handleViewChange}
        onNavigate={handleNavigate}
        className="w-full h-full"
      />
    </div>
  );
}

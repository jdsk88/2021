import { FormattedMessage } from "react-intl";
import {
  // CloudUpload,
  // LensBlur,
  // Javascript,
  AssignmentInd,
  AccessibilityNew,
  Snowshoeing,
  HistoryEdu,
  History,
  Code,
  Mail,
  Web,
  MobileFriendly,
  Computer,
  Money,
  Dashboard,
} from "@mui/icons-material";

const main_items = {
  id: "main",
  type: "container",
  url: "/",
  children: [
    {
      id: "dashboard",
      title: <FormattedMessage id="dashboard" />,
      type: "item",
      url: "/dashboard",
      icon: Dashboard,
    },
    {
      id: "aboutme",
      title: <FormattedMessage id="aboutme" />,
      type: "collapse",
      icon: AssignmentInd,
      children: [
        {
          id: "aboutme",
          title: <FormattedMessage id="aboutme" />,
          type: "item",
          url: "/cv/aboutme",
          icon: AccessibilityNew,
        },
        {
          id: "soft",
          title: <FormattedMessage id="soft" />,
          type: "item",
          url: "/cv/softskills",
          icon: AccessibilityNew,
        },
        {
          id: "hard",
          title: <FormattedMessage id="hard" />,
          type: "item",
          url: "/cv/hardskills",
          icon: Snowshoeing,
        },

        {
          id: "education",
          title: <FormattedMessage id="education" />,
          type: "item",
          url: "/cv/education",
          icon: HistoryEdu,
        },
        {
          id: "jobhistory",
          title: <FormattedMessage id="jobhistory" />,
          type: "item",
          url: "/cv/jobhistory",
          icon: History,
        },
      ],
    },
    {
      id: "technology",
      title: <FormattedMessage id="technology" />,
      type: "collapse",
      url: "/cv/technology",
      icon: Code,
      children: [
        {
          id: "web",
          title: <FormattedMessage id="web" />,
          type: "item",
          url: "/cv/technology/web",
          icon: Web,
        },
        {
          id: "mobile",
          title: <FormattedMessage id="mobile" />,
          type: "item",
          url: "/cv/technology/mobile",
          icon: MobileFriendly,
        },
        {
          id: "standalone",
          title: <FormattedMessage id="standalone" />,
          type: "item",
          url: "/cv/technology/standalone",
          icon: Computer,
        },
      ],
    },
    {
      id: "pricing",
      title: <FormattedMessage id="pricing" />,
      type: "item",
      url: "/pricing",
      icon: Money,
    },
    {
      id: "contact",
      title: <FormattedMessage id="contact" />,
      type: "item",
      url: "/contact",
      icon: Mail,
    },
  ],
};

export default main_items;

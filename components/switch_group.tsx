import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchChoiceCard() {
  return (
    <FieldGroup className="w-full border h-[calc(100vh-200px)] items-center flex flex-col justify-center border-input p-3 rounded-3xl max-w-sm">
      <FieldLabel className="border-input" htmlFor="switch-share">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M220,112v96a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V112A20,20,0,0,1,56,92H76a12,12,0,0,1,0,24H60v88H196V116H180a12,12,0,0,1,0-24h20A20,20,0,0,1,220,112ZM96.49,72.49,116,53v83a12,12,0,0,0,24,0V53l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z"></path></svg>Share Across Devices</FieldTitle>
          
            <FieldDescription>
              Focus is shared across devices, and turns off when you leave the
              app.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-share" />
        </Field>
      </FieldLabel>
      <FieldLabel className="border-input" htmlFor="switch-notifications">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M225.29,165.93C216.61,151,212,129.57,212,104a84,84,0,0,0-168,0c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.66,186,19.77,19.77,0,0,0,48,196H84.18a44,44,0,0,0,87.64,0H208a19.77,19.77,0,0,0,17.31-10A20.08,20.08,0,0,0,225.29,165.93ZM128,212a20,20,0,0,1-19.6-16h39.2A20,20,0,0,1,128,212ZM54.66,172C63.51,154,68,131.14,68,104a60,60,0,0,1,120,0c0,27.13,4.48,50,13.33,68Z"></path></svg>Enable Notifications</FieldTitle>
            <FieldDescription>
              Receive notifications when focus mode is enabled or disabled.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-notifications" />
        </Field>
      </FieldLabel>
      <FieldLabel className="border-input" htmlFor="switch-autoboot">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M227.85,46.89a20,20,0,0,0-18.74-18.74c-13.13-.77-46.65.42-74.48,28.24L131,60H74.36a19.83,19.83,0,0,0-14.14,5.86L25.87,100.19a20,20,0,0,0,11.35,33.95l37.14,5.18,42.32,42.32,5.19,37.18A19.88,19.88,0,0,0,135.34,235a20.13,20.13,0,0,0,6.37,1,19.9,19.9,0,0,0,14.1-5.87l34.34-34.35A19.85,19.85,0,0,0,196,181.64V125l3.6-3.59C227.43,93.54,228.62,60,227.85,46.89ZM76,84h31L75.75,115.28l-27.23-3.8ZM151.6,73.37A72.27,72.27,0,0,1,204,52a72.17,72.17,0,0,1-21.38,52.41L128,159,97,128ZM172,180l-27.49,27.49-3.8-27.23L172,149Zm-72,22c-8.71,11.85-26.19,26-60,26a12,12,0,0,1-12-12c0-33.84,14.12-51.32,26-60A12,12,0,1,1,68.18,175.3C62.3,179.63,55.51,187.8,53,203c15.21-2.51,23.37-9.3,27.7-15.18A12,12,0,1,1,100,202Z"></path></svg>Enable AutoBoot</FieldTitle>
            <FieldDescription>
              Receive notifications when focus mode is enabled or disabled.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-autoboot" />
        </Field>
      </FieldLabel>
      <FieldLabel className="border-input" htmlFor="switch-agent">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M203.91,230.51a12,12,0,0,1-10.42,13.4A12.87,12.87,0,0,1,192,244a12,12,0,0,1-11.89-10.51l-8-64a12,12,0,0,1,4.7-11.08,68.26,68.26,0,0,0,27.19-56c0-.81-.07-1.6-.11-2.4H189.62l-23.1,27.72A23.69,23.69,0,0,1,168,136a24.07,24.07,0,1,1-19.92-23.64l26.7-32A12,12,0,0,1,184,76h13.91a68.19,68.19,0,0,0-58.22-39.9Q137.85,36,136,36V55.23a24,24,0,1,1-24,0V40.34A68.11,68.11,0,0,0,68,104a12,12,0,0,1-1.36,5.54L45.51,150.15,69,160.9a12,12,0,0,1,7,10.91V204h44a12,12,0,0,1,0,24H72a20,20,0,0,1-20-20V179.51l-20.57-9.42a3.26,3.26,0,0,1-.38-.18,20,20,0,0,1-9.43-25.76,7.49,7.49,0,0,1,.38-.81l22-42.37A92,92,0,0,1,141,12.13c47.7,2.51,85.93,41.92,87,89.71a92.33,92.33,0,0,1-31.25,71.26Z"></path></svg>Enable Agent</FieldTitle>
            <FieldDescription>
              Receive notifications when focus mode is enabled or disabled.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-agent" />
        </Field>
      </FieldLabel>
    </FieldGroup>
  );
}

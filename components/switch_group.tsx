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
    <FieldGroup className="w-full border border-input p-3 rounded-3xl max-w-sm">
      <FieldLabel className="border-input" htmlFor="switch-share">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Share across devices</FieldTitle>
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
            <FieldTitle>Enable notifications</FieldTitle>
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
            <FieldTitle>Enable AutoBoot</FieldTitle>
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
            <FieldTitle>Enable Agent</FieldTitle>
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

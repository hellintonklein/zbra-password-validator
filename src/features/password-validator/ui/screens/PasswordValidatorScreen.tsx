import { AnimatePresence } from 'motion/react';
import { usePasswordValidatorLogic } from './usePasswordValidatorLogic';
import { Input } from '@/src/shared/ui/components/Input';
import { PasswordInput } from '@/src/shared/ui/components/PasswordInput';
import { Button } from '@/src/shared/ui/components/Button';
import { RequirementItem } from '../components/RequirementItem';
import { StatusCard } from '../components/StatusCard';
import { InlineFeedback } from '@/src/shared/ui/components/Feedback';
import { 
  PageContainer, 
  SplitLayout, 
  MainSection, 
  Sidebar, 
  FormLayout, 
  FormActions 
} from '@/src/shared/ui/layouts';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/shared/ui/design-system';
import React from 'react';
import { Title, Text, Box } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { PASSWORD_VALIDATOR_CONSTANTS } from '../../constants';
import { FormContent, HeaderGroup, SidebarContent, RequirementsGroup, RequirementsList } from './PasswordValidatorScreen.styleds';
import { PASSWORD_RULES } from '../../domain/rules';

const { IDS, CONFIG } = PASSWORD_VALIDATOR_CONSTANTS;

export const PasswordValidatorScreen = () => {
  const { t } = useTranslation(['password_validator', 'common']);
  const { 
    register, 
    handleSubmit, 
    validation, 
    isSubmitting,
    submissionStatus,
    canSubmit 
  } = usePasswordValidatorLogic();

  const securityRequirements = PASSWORD_RULES.map(({ id, messageKey }) => ({
    id,
    label: t(messageKey)
  }));

  return (
    <PageContainer>
      <SplitLayout>
        <MainSection>
          <FormContent>
            <HeaderGroup>
              <Title 
                c="brand"
                order={1} 
                className="text-[clamp(1rem,6vw,2.4rem)] font-extrabold text-gray-900 tracking-tight"
                lh={1.1}
              >
                {t('title')}
              </Title>
              <Text c="dimmed" fw={500} className="text-[clamp(0.7rem,2vw,0.85rem)] opacity-80">
                {t('subtitle')}
              </Text>
            </HeaderGroup>
            
            <FormLayout 
              id={IDS.FORM}
              onSubmit={handleSubmit} 
            >
              <Input 
                id={IDS.INPUT_NAME}
                label={t('labels.name')}
                placeholder={t('placeholders.name')} 
                aria-required="true"
                aria-label={t('labels.name')}
                {...register('name', { required: true })} 
              />
              
              <Input 
                id={IDS.INPUT_EMAIL}
                label={t('labels.email')}
                type="email" 
                placeholder={t('placeholders.email')} 
                aria-required="true"
                aria-label={t('labels.email')}
                {...register('email', { 
                  required: true,
                  pattern: CONFIG.EMAIL_PATTERN
                })} 
              />
              
              <PasswordInput 
                id={IDS.INPUT_PASSWORD}
                label={t('labels.password')}
                placeholder={t('placeholders.password')} 
                maxLength={CONFIG.MAX_PASSWORD_LENGTH}
                aria-required="true"
                aria-label={t('labels.password')}
                aria-invalid={!validation.isValid}
                className={cn(
                  "font-mono transition-colors",
                  validation.isValid && "bg-emerald-50/50 border-emerald-200 text-emerald-800"
                )}
                {...register('password', { required: true, maxLength: CONFIG.MAX_PASSWORD_LENGTH })} 
              />
            </FormLayout>
          </FormContent>
        </MainSection>

        <Sidebar>
          <SidebarContent>
            <RequirementsGroup>
              <Text size="10px" fw={700} c="dimmed" tt="uppercase" lts="0.05em">{t('requirements.title')}</Text>
              <RequirementsList>
                {securityRequirements.map((req, i) => {
                  const isError = validation.failedRuleIds.includes(req.id);
                  return (
                    <RequirementItem 
                      key={i}
                      id={req.id}
                      label={req.label}
                      isError={isError}
                    />
                  );
                })}
              </RequirementsList>
            </RequirementsGroup>

            <StatusCard 
              show={submissionStatus !== 'idle'} 
              status={submissionStatus}
            >
              {submissionStatus === 'success' ? t('status.success') : t('status.error')}
            </StatusCard>
          </SidebarContent>

          <FormActions>
            <Button 
              id={IDS.BUTTON_SUBMIT}
              type="submit"
              form={IDS.FORM}
              onClick={handleSubmit}
              disabled={!canSubmit}
              isLoading={isSubmitting}
              fullWidth
              aria-label={t('aria.submit')}
            >
              {t('common:buttons.submit')}
            </Button>

            <AnimatePresence>
              {submissionStatus === 'success' && (
                <InlineFeedback>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t('feedback.success')}
                </InlineFeedback>
              )}
            </AnimatePresence>
          </FormActions>
        </Sidebar>
      </SplitLayout>
    </PageContainer>
  );
};




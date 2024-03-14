type marginValue = number | 'auto' | 'initial' | 'inherit' | 'unset' | 'revert' | 'none'

interface Margin {
  /**
   * Margin
   *
   * @type {marginValue}
   * @memberof Margin
   * @default 0
   * @example
   * css`m={2}` => `margin: theme-spacing-2;`
   */
  m: marginValue;

  /**
   * Margin Top
   *
   * @type {number}
   * @memberof Margin
   * @default 0
   * @example
   * css`mt={2}` => `margin-top: theme-spacing-2;`
   */
  mt: number;

  /**
   * Margin Right
   *
   * @type {number}
   * @memberof Margin
   * @default 0
   * @example
   * css`mr={2}` => `margin-right: theme-spacing-2;`
   */
  mr: number;

  /**
   * Margin Bottom
   *
   * @type {number}
   * @memberof Margin
   * @default 0
   * @example
   * css`mb={2}` => `margin-bottom: theme-spacing-2;`
   */
  mb: number;

  /**
   * Margin Left
   *
   * @type {number}
   * @memberof Margin
   * @default 0
   * @example
   * css`ml={2}` => `margin-left: theme-spacing-2;`
   */
  ml: number;

  /**
   * Margin X
   *
   * @type {number}
   * @memberof Margin
   * @default 0
   * @example
   * css`mx={2}` => `margin-left: theme-spacing-2; margin-right: theme-spacing-2;`
   */
  mx: number;

  /**
   * Margin Y
   *
   * @type {number}
   * @memberof Margin
   * @default 0
   * @example
   * css`my={2}` => `margin-top: theme-spacing-2; margin-bottom: theme-spacing-2;`
   */
  my: number;
}
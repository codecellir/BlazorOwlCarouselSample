namespace BlazorOwlCarouselSample.Components
{
    public class OwlOption
    {
        public bool Center { get; set; }
        public bool Loop { get; set; }
        public bool AutoWidth { get; set; }
        public bool Rtl { get; set; }
        public bool Autoplay { get; set; }
        public int AutoplayTimeout { get; set; }
        public bool AutoplayHoverPause { get; set; }
        public bool AutoHeight { get; set; }
        public bool Dots { get; set; } = true;
        public bool Nav { get; set; } = true;
        public int Items { get; set; } = 3;
        public int Marging { get; set; }

        public List<OwlResponsive> Responsive { get; set; } = new();
    }

    public class OwlResponsive
    {
        public int ViewSize { get; set; }
        public int Items { get; set; }
        public int Margin { get; set; }
        public bool Nav { get; set; }
        public bool Loop { get; set; }
        public bool Center { get; set; }
    }
}
